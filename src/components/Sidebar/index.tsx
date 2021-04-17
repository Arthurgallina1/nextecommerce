import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

export type SidebarProps = {
  items: ItemProps[]
}

const Sidebar = ({ items }: SidebarProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>
        {item.type === 'checkbox' &&
          item.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.label}
            />
          ))}
        {item.type === 'radio' &&
          item.fields.map((field) => (
            <Radio
              id={field.name}
              key={field.name}
              value={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.label}
            />
          ))}
      </div>
    ))}
  </S.Wrapper>
)

export default Sidebar
