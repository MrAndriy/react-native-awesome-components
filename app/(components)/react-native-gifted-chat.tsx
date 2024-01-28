import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

const initialMessages = [
  {
    _id: 1,
    text: 'This is a system message',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    system: true,
  },
  {
    _id: 2,
    text: 'Hello developer',
    createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
  {
    _id: 3,
    text: 'Hi! I work from home today!',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    image: 'http://placekitten.com/g/200/300',
  },
  {
    _id: 4,
    text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
    createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    quickReplies: {
      type: 'radio', // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: '😋 Yes',
          value: 'yes',
        },
        {
          title: '📷 Yes, let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: '😞 Nope. What?',
          value: 'no',
        },
      ],
    },
  },
  {
    _id: 5,
    text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
    createdAt: new Date(Date.UTC(2016, 5, 15, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    quickReplies: {
      type: 'checkbox', // or 'radio',
      values: [
        {
          title: 'Yes',
          value: 'yes',
        },
        {
          title: 'Yes, let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: 'Nope. What?',
          value: 'no',
        },
      ],
    },
  },
  {
    _id: 6,
    text: 'Come on!',
    createdAt: new Date(Date.UTC(2016, 5, 15, 18, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
  {
    _id: 7,
    text: `Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
        But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
        And the magic number is 42!
        #react #react-native`,
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
]

const ReactNativeGiftedChat = () => {
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    return setMessages(initialMessages.reverse())
  }, [])

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <GiftedChat
        messagesContainerStyle={{ marginBottom: 20 }}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  )
}

export default ReactNativeGiftedChat
