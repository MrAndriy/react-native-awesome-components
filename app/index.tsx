import { Text, View } from '@/components/Themed'
import { Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { ExternalLink } from '../components/ExternalLink'

const data = [
  {
    _id: '1',
    title: 'react-native-bouncy-checkbox',
    description: 'A custom checkbox component for Android and iOS.',
    href: '/react-native-bouncy-checkbox',
    link: 'https://github.com/WrathChaos/react-native-bouncy-checkbox',
  },
  // {
  //   _id: 2,
  //   title: 'Bottom sheet',
  //   description: 'A performant interactive bottom sheet with fully configurable options 🚀',
  //   href: '',
  //   link: '',
  // },
]

export default function ModalScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-200 py-2 px-4">
      {data.map((item) => (
        <Card {...item} key={item._id} />
      ))}
    </ScrollView>
  )
}

const Card = ({ title, description, href, link }: { title: string; description: string; href: string; link: string }) => {
  return (
    <Link href={href as any} asChild>
      <TouchableOpacity>
        <View className="h-auto px-4 py-2 flex justify-center bg-white rounded-md mb-2 space-y-2">
          <Text className="text-xl">{title}</Text>
          <Text>{description}</Text>
          <ExternalLink href={link} className='text-indigo-600'>Source code</ExternalLink>
        </View>
      </TouchableOpacity>
    </Link>
  )
}
