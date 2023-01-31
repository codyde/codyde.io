import * as LaunchDarkly from 'launchdarkly-js-client-sdk'
import { v4 as uuidv4 } from "uuid";

let launchDarklyClient
let OSName = "Unknown"
let DeviceType = "Unknown"

async function operatingSytem() { 
  if (navigator.userAgent.indexOf("Win")!=-1) OSName="Windows";
  if (navigator.userAgent.indexOf("Mac")!=-1) OSName="MacOS";
  if (navigator.userAgent.indexOf("X11")!=-1) OSName="UNIX";
  if (navigator.userAgent.indexOf("Linux")!=-1) OSName="Linux";
  if (navigator.userAgent.indexOf("iPhone")!=-1) OSName="iPhone";
  if (navigator.userAgent.indexOf("Android")!=-1) OSName="Android";
  console.log(OSName)
  return OSName
}

async function device() {
  if (navigator.userAgent.indexOf("iPhone")!=-1 || navigator.userAgent.indexOf("Android")!=-1){
     DeviceType="Mobile"
    }
    else {
  DeviceType="Desktop"
    }
  console.log(DeviceType)
  return DeviceType
}

async function initialize(context) {
  if (!context) {
    context = {
      kind: 'multi',
      user: {
        key: uuidv4(),
        name: 'User',
        role: 'Visitor'
      },
      device: {
        key: uuidv4(),
        name: 'Device',
        OS: await operatingSytem(),
        platform: await device()
      },
      location: {
        key: uuidv4(),
        name: 'Location',
        timezone: await Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }
  }

  const client = LaunchDarkly.initialize(import.meta.env.VITE_LAUNCHDARKLY_SDK_KEY, context)
  await client.waitForInitialization()
  return client
}

async function getClient() {
  if (launchDarklyClient) return launchDarklyClient
  return (launchDarklyClient = await initialize())
}

export async function getFlagValue(key, fnChangeListener) {
  const client = await getClient()
  let flagValue
  flagValue = await client.variation(key, false)
  if (fnChangeListener) {
    client.on('change:' + key, fnChangeListener)
  }
  return flagValue
}