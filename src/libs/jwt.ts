let _token: string = localStorage.getItem('jwt') || ''

export function set (token: string) {
  _token = token
  localStorage.setItem('jwt', token)
}

export function get () {
  return _token
}

export function clear () {
  set('')
}
