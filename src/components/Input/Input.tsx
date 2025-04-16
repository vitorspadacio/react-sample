import { HTMLInputTypeAttribute, KeyboardEventHandler } from 'react'
import { useController } from 'react-hook-form'
import { Error, Label } from '../Styled/Label'
import { Input } from './Input.styles'

interface Props {
  className?: string
  control: any
  disabled?: boolean
  label?: string
  name: string
  onKeyDown?: KeyboardEventHandler
  placeholder?: string
  type: HTMLInputTypeAttribute
}

export default function ({
  className,
  control,
  disabled = false,
  label,
  name,
  onKeyDown,
  placeholder = '',
  type,
}: Props) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name, control })

  return (
    <Label className={className}>
      {label ? <span>{label}</span> : undefined}
      <Input
        disabled={disabled}
        hasError={Boolean(error?.message)}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type={type}
        value={value || ''}
      />
      <Error>{error?.message}</Error>
    </Label>
  )
}
