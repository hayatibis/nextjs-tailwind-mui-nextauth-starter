import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'

type User = {
  id: number
  name: string
  email: string
}

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  const users: User[] = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then((res) => res.json())

  return (
    <main className="max-w-7xl m-auto p-5">
      <div className="grid gap-5 grid-cols-4">
        {users.map((user) => (
          <div key={user.id} className="border-1 border-[#ccc] text-center">
            <Image
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              width={180}
              height={180}
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}
