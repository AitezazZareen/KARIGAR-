# KARIGAR

SOLUTION TO A PROBLEM

Har Kaam. Asaan. Bharosemand. — a marketplace app connecting customers with verified local
tradespeople (electricians, plumbers, AC technicians, carpenters, painters, masons, mechanics,
cleaners, and more).

## Tech Stack

- [Expo](https://expo.dev) (React Native) + TypeScript
- React Navigation (native stack + bottom tabs)

## Project Structure

```
App.tsx                  Entry point
src/
  theme/                 Colors, spacing, typography
  data/mockData.ts       Mock services, workers, transactions, messages
  components/            Shared UI (Button, Avatar, ServiceIcon, StatusStepper, etc.)
  screens/                Splash, Home, SelectService, PostJob, JobOffers,
                          JobInProgress, WorkerProfile, Wallet, Messages, MyJobs, Profile
  navigation/             RootNavigator (stack) + MainTabs (bottom tabs)
```

## Getting Started

```
npm install
npm run web       # or: npm run ios / npm run android
```

This scaffold renders every screen from the app's UI mockup with static mock data — no backend
yet. Next steps: real authentication, a backend API (jobs, offers, chat, payments), live
location tracking on the "Job in Progress" map, and push notifications.
