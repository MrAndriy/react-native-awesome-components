import { View } from 'react-native'
import React from 'react'
import { Bar, CartesianChart } from 'victory-native'
import { LinearGradient, useFont, vec } from '@shopify/react-native-skia'

const Chart = () => {
  const data = Array.from({ length: 6 }, (_, index) => ({
    // Starting at 1 for Jaunary
    month: index + 1,
    // Randomizing the listen count between 100 and 50
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
  }))

  return (
    <View className="h-[400px]">
      <CartesianChart
        data={data}
        xKey={'month'}
        yKeys={['listenCount']}
        domainPadding={{ left: 50, right: 50, top: 30 }}
        axisOptions={{
          /**
           * 👇 We will also use the formatXLabel prop to format the month number
           * from a number to a month name.
           */
          formatXLabel: (value) => {
            const date = new Date(2023, value - 1)
            return date.toLocaleString('default', { month: 'short' })
          },
        }}
      >
        {({ points, chartBounds }) => (
          <Bar
            chartBounds={chartBounds} // 👈 chartBounds is needed to know how to draw the bars
            points={points.listenCount} // 👈 points is an object with a property for each yKey
            /**
             * 👇 We can round the top corners of our bars by passing a number
             * to the roundedCorners prop. This will round the top left and top right.
             */
            roundedCorners={{
              topLeft: 5,
              topRight: 5,
            }}
          >
            {/* 👇 We add a gradient to the bars by passing a LinearGradient as a child. */}
            <LinearGradient
              start={vec(0, 0)} // 👈 The start and end are vectors that represent the direction of the gradient.
              end={vec(0, 400)}
              colors={[
                // 👈 The colors are an array of strings that represent the colors of the gradient.
                '#a78bfa',
                '#a78bfa50', // 👈 The second color is the same as the first but with an alpha value of 50%.
              ]}
            />
          </Bar>
        )}
      </CartesianChart>
    </View>
  )
}

export default Chart
