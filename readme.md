# User Loyalty

Test [Facebook's Doomsday](http://www.theverge.com/2016/1/4/10708356/facebook-is-preparing-for-android-doomsday) scenario against your users to determine their loyalty to your application.

## Demo

[http://dunckr.github.io/user-loyalty/example/](http://dunckr.github.io/user-loyalty/example/)

## Usage

```js
import UserLoyalty from 'user-loyalty'

UserLoyalty.start()

location.reload()

UserLoyalty.stop()

console.log(UserLoyalty.results())
```

## API

### UserLoyalty.start()

Prevents off XMLHttpRequests and begins logging the number of times the application is refreshed. Clears any statistics held about the user.

### UserLoyalty.stop()

Re-enables XMLHttpRequests.

### UserLoyalty.statistics()

Returns the number of times the application had been refreshed during the testing scenario.

### UserLoyalty.active()

Returns whether testing scenario is currently in progress.

## Installation

```sh
npm install user-loyalty --save
```

## Usage

```js
****
```

## Dev

```sh
npm run start
```

## Test

```sh
npm run test
```

## Build

```sh
npm run build
```

## License

MIT © [Duncan Beaton](http://dunckr.com)
