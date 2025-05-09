# react-native-blur-view

A lightweight yet powerful React Native package for applying a native blur (frosted glass) effect to any view on both iOS and Android.

## Installation

```sh
npm install react-native-blur-view
```

or

```sh
yarn add react-native-blur-view
```

Make sure you also have react-native-webview installed in your project:

```sh
npm install react-native-webview
```

or

```sh
yarn add react-native-webview
```

## ✨ Features

- No native code or platform-specific setup
- Fully customizable background color (`rgba`)
- Optional border radius for rounded blur overlays
- Supports child content over the blurred background
- Compatible with both Android and iOS

## 🚀 Why use this?

Native blur implementations often require linking native modules or configuring platform-specific code. This component offers a JS-only alternative using CSS `backdrop-filter` (when supported), wrapped inside a `WebView`, which works reliably across platforms.

## 🧪 Example

```tsx
import BlurView from 'react-native-blur-overlay';

<BlurView
  backgroundColor="rgba(255, 255, 255, 0.5)"
  borderRadius={16}
  style={{ width: 200, height: 100 }}
>
  <Text>Your content here</Text>
</BlurView>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
