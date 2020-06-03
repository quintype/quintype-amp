_This library is part of the [Malibu Framework](https://developers.quintype.com/malibu)_.

It's cumbersome to build AMP pages from scratch. Wouldn't it be cool if you could build them like how you'd build non-amp pages - using a library like React?
Quintype's [AMP Library](https://www.npmjs.com/package/@quintype/amp) does just that!

#### Backstory - why does the AMP library exist?

Until now, AMP pages were handled by platform. The frontend app would route amp page requests upstream, and would get ready-to-render AMP HTML. As the number of publishers using the platform grew, there were more feature and customization requests. There arose a need to create something that would keep up with the feature requests and be scalable and maintainable

#### What all does the library export?

- React components with base styles that you can use to build custom amp pages for your malibu app
- Helper functions that are needed for this purpose
- A default story page template built using these components.

#### Set up process

Setting up your app to consume the amp library is Easy. Follow the integration guide
