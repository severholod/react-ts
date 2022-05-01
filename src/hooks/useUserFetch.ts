import { useEffect, useState } from 'react'
import { IUserDetail } from '../types/user'
import axios from 'axios'

export const useUserFetch = (id: string | undefined = '') => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<IUserDetail | null>(null)
  const fetchUser = async () => {
    try {
      setLoading(true)
      const res = await axios.get<IUserDetail>('https://jsonplaceholder.typicode.com/users/' + id)
      setUser(res.data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return { isLoading, user }
}
