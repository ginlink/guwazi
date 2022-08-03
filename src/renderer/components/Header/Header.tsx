import { Typography } from '@/theme'
import { Icon } from '@iconify/react'
import { useCallback } from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'

const StyledFlex = styled(Flex)``

const { systemAPI } = window

const OS = window.systemAPI.platform()

export default function Header() {
  const version = '0.1.0'

  const handleMinimize = useCallback(() => {
    systemAPI.minimizeWindow()
  }, [])
  const handleCloce = useCallback(() => {
    systemAPI.closeWindow()
  }, [])

  return (
    <StyledFlex className="drag" alignItems={'center'} justifyContent={'space-between'}>
      <Box style={{ width: 0 }} />
      <Flex justifyContent={'center'}>
        <Typography variant="small">Guwazi - {version}</Typography>
      </Flex>
      {OS === 'win32' ? (
        <Box>
          <Flex className="no-drag">
            <Typography style={{ cursor: 'pointer' }} onClick={handleMinimize}>
              <Icon icon="akar-icons:circle-minus" />
            </Typography>
            <Typography ml={'4px'} style={{ cursor: 'pointer' }} onClick={handleCloce}>
              <Icon icon="ant-design:close-circle-outlined" />
            </Typography>
          </Flex>
        </Box>
      ) : null}
    </StyledFlex>
  )
}
