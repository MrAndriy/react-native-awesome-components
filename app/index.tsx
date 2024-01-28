import { Text, View } from '@/components/Themed'
import { Pressable, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import { ExternalLink } from '@/components/ExternalLink'
import { Ionicons } from '@expo/vector-icons'

const data = [
  {
    _id: '1',
    title: 'Checkbox',
    description: 'A custom checkbox component for Android and iOS.',
    href: '/react-native-bouncy-checkbox',
    link: 'https://github.com/WrathChaos/react-native-bouncy-checkbox',
  },
  {
    _id: 2,
    title: 'Bottom sheet',
    description: 'A performant interactive bottom sheet with fully configurable options 🚀',
    href: '/react-native-bottom-sheet',
    link: 'https://github.com/gorhom/react-native-bottom-sheet',
  },
  {
    _id: 3,
    title: 'Chatting',
    description: 'The most complete chat UI for React Native',
    href: '/react-native-gifted-chat',
    link: 'https://github.com/FaridSafi/react-native-gifted-chat',
  },
  {
    _id: 4,
    title: 'Chart',
    description: 'A simple chart for React Native using chartkit',
    href: '/chart',
    link: 'https://github.com/FormidableLabs/victory-native-xl',
  },
  {
    _id: 5,
    title: 'Toast',
    description: 'React Native toast message component',
    href: '/toast',
    link: 'https://github.com/calintamas/react-native-toast-message',
  },
  {
    _id: 6,
    title: 'Skeleton',
    description: 'SVG powered React Native skeleton component',
    href: '/skeleton',
    link: 'https://github.com/danilowoz/react-content-loader',
  },
  {
    _id: 7,
    title: 'Page View',
    description: 'React Native ViewPage component',
    href: '/page-view',
    link: 'https://github.com/callstack/react-native-pager-view',
  },
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
      <Pressable>
        <View className="h-auto px-4 py-2 flex justify-center bg-white rounded-md mb-2 space-y-2">
          <Text className="text-xl text-black">{title}</Text>
          <Text className="text-black">{description}</Text>
          <ExternalLink href={link} className="w-6">
            <Ionicons name="logo-github" size={24} color="black" style={{ backgroundColor: 'transparent' }} />
          </ExternalLink>
        </View>
      </Pressable>
    </Link>
  )
}
