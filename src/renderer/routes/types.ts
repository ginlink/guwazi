import { FC } from 'react'
import { IndexRouteProps, PathRouteProps } from 'react-router-dom'

type CustomPathRouteProps = {
  component: FC
  title?: string
  tKey?: string
  children?: CustomRouteProps[]
} & Omit<PathRouteProps, 'children' | 'element'>

type CustomIndexRouteProps = Omit<IndexRouteProps, 'element'> & Pick<CustomPathRouteProps, 'component'>

type CustomRouteProps = CustomPathRouteProps | CustomIndexRouteProps

export type { CustomRouteProps, CustomPathRouteProps, CustomIndexRouteProps }
