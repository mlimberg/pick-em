export const getUsername = email => {
  const [name] = email.split('@')
  const username = [...name].filter(char => char !== '.').join('')

  return username.trim()
}