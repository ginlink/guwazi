import { Alert, Box, Button, Typography, useTheme } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FieldWrapper, SchemaFieldObject, SchemaFieldString } from 'react-dynamic-material-form';
import throttle from 'lodash/throttle';
import { useParams } from 'react-router-dom';
import { PluginConfig } from '@ginlink/guwazi-core/dist/lib/LifecyclePlugins';
import { Row } from '@/components/styled';
import Iconify from '@/components/Iconify';

const nameMap: {
  [shortName: string]: string;
} = {
  youdao: '有道翻译',
};

const { guwaziAPI } = window;

function TranslateConfig() {
  const { pluginShortName } = useParams<{
    pluginShortName?: string;
  }>();

  const [pluginConfig, setPluginConfig] = useState<PluginConfig[] | undefined>();
  const [formValue, setActualFormValue] = useState<any>({});

  const setFormValueRef = useRef(throttle((newValue) => setActualFormValue(newValue), 1000));
  const setFormValue = setFormValueRef.current;

  const theme = useTheme();

  const schema = useMemo(() => {
    if (!pluginConfig) {
      return;
    }

    const schema = new SchemaFieldObject();

    const pluginFields = pluginConfig.map((item) => {
      let itemSchema: SchemaFieldString = new SchemaFieldString();

      switch (item.type) {
        case 'input':
          itemSchema = new SchemaFieldString();
          itemSchema.config = {
            ...itemSchema.config,
            required: item.required,
            defaultValue: item.default,
            helperText: item.alias ?? '',
            colSpan: 12,
          };
          break;

        default:
          break;
      }

      return {
        id: item.name,
        name: item.name,
        data: itemSchema,
      };
    });

    schema.fields = [...schema.fields, ...pluginFields];

    return schema;
  }, [pluginConfig]);

  const handleValueChange = (v: any) => {
    setFormValue(v);
  };

  const handleSave = async (e: any) => {
    e.preventDefault();

    const key = `translate.${pluginShortName}`;
    await guwaziAPI.saveConfig({
      [key]: formValue,
    });
  };

  useEffect(() => {
    async function fetch() {
      try {
        if (!pluginShortName) {
          return;
        }

        // const name = `guwazi-plugin-youdao`;
        const name = `guwazi-plugin-${pluginShortName}`;
        const config = await guwaziAPI.getPluginConfig(name);

        setPluginConfig(config);
      } catch (err) {
        console.log('[err]:', err);
      }
    }

    fetch();
  }, [pluginShortName]);

  useEffect(() => {
    async function fetch() {
      try {
        // translate.youdao
        const name = `translate.${pluginShortName}`;
        const storedConfig = await guwaziAPI.getConfig(name);

        console.log('[storedConfig]:', storedConfig);
        setFormValue(storedConfig);
      } catch (err) {
        console.log('[err]:', err);
      }
    }

    fetch();
  }, [pluginShortName, setFormValue]);

  useEffect(() => {
    console.log('[formValue]:', formValue);
  }, [formValue]);

  useEffect(() => {
    console.log('[pluginConfig]:', pluginConfig);
  }, [pluginConfig]);

  if (!schema) {
    return (
      <Alert severity={'warning'}>
        <Typography>schema is not valid</Typography>
      </Alert>
    );
  }

  return (
    <Box
      sx={{
        background: theme.palette.grey[300],
        borderRadius: `20px`,
        padding: `16px 24px 24px`,
      }}
    >
      <Row justifyContent={'center'} spacing={['8px']}>
        <Iconify icon={'eos-icons:configuration-file-outlined'} />
        <Typography variant={'h3'}>{nameMap[pluginShortName ?? '']}</Typography>
      </Row>

      <Box sx={{ mt: ['16px'] }}>
        <form onSubmit={handleSave}>
          <FieldWrapper
            schema={schema}
            value={formValue}
            onValueChange={(value) => handleValueChange(value)}
            config={{ i18n: [] }}
          />

          <Row
            justifyContent={'flex-end'}
            sx={{
              mt: ['8px'],
            }}
          >
            <Button type={'submit'} variant={'contained'}>
              保存
            </Button>
          </Row>
        </form>
      </Box>
    </Box>
  );
}

export default TranslateConfig;
