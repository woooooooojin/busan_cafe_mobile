import React from 'react'
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

export default function ChannelTalk() {
    const api = process.env.API_KEY
  return (
    <>
        {
            ChannelService.loadScript()
        }
        {
            ChannelService.boot({
                "pluginKey": "3443e5c0-f405-4b2c-8038-6396ecb53ecb",
              })
        }
    </>
  )
}
