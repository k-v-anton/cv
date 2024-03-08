type SectionContainerPropsType = {
  children: JSX.Element[]
}

export const SectionContainer = (props: SectionContainerPropsType) => {
  const { children } = props
  return <div>{children}</div>
}
