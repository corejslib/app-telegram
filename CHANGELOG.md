# Changelog

### v1.0.14 (2026-10-09)

**Code refactoring:**

- \[PATCH] refactor: refactor msgpack (● [8241e65](https://github.com/corejslib/app-telegram/commit/8241e65); 👬 zdm)

Compare with the previous release: [v1.0.13...v1.0.14](https://github.com/corejslib/app-telegram/compare/v1.0.13...v1.0.14)

### v1.0.13 (2026-10-07)

**Bug fixes:**

- \[PATCH] fix: fix activity controller callbacks (● [a4f927a](https://github.com/corejslib/app-telegram/commit/a4f927a); 👬 zdm)

**Other changes:**

- style: lint (● [3ff750c](https://github.com/corejslib/app-telegram/commit/3ff750c); 👬 zdm)

Compare with the previous release: [v1.0.12...v1.0.13](https://github.com/corejslib/app-telegram/compare/v1.0.12...v1.0.13)

### v1.0.12 (2026-10-06)

**Other changes:**

- chore: update .pot template (● [d23f687](https://github.com/corejslib/app-telegram/commit/d23f687); 👬 zdm)

- chore: update translations (● [d2c935a](https://github.com/corejslib/app-telegram/commit/d2c935a); 👬 zdm)

Compare with the previous release: [v1.0.11...v1.0.12](https://github.com/corejslib/app-telegram/compare/v1.0.11...v1.0.12)

### v1.0.11 (2026-10-05)

**Bug fixes:**

- \[PATCH] fix: stop processing when database connection wait fails (● [83b2491](https://github.com/corejslib/app-telegram/commit/83b2491); 👬 zdm)

Compare with the previous release: [v1.0.10...v1.0.11](https://github.com/corejslib/app-telegram/compare/v1.0.10...v1.0.11)

### v1.0.10 (2026-09-27)

**Bug fixes:**

- \[PATCH] fix: correct Russian "Cancel" translation (● [dc77e82](https://github.com/corejslib/app-telegram/commit/dc77e82); 👬 zdm)

**Other changes:**

- chore: update Telegram locale source references (● [dc3e9ed](https://github.com/corejslib/app-telegram/commit/dc3e9ed); 👬 zdm)

Compare with the previous release: [v1.0.9...v1.0.10](https://github.com/corejslib/app-telegram/compare/v1.0.9...v1.0.10)

### v1.0.9 (2026-09-27)

**Other changes:**

- Revert "chore: remove .pot" (● [76a584b](https://github.com/corejslib/app-telegram/commit/76a584b); 👬 zdm)

    This reverts commit [15ed4e8](https://github.com/corejslib/app-telegram/commit/15ed4e8b76bcc2146538c31bc9e37c9cf65918ed).

Compare with the previous release: [v1.0.8...v1.0.9](https://github.com/corejslib/app-telegram/compare/v1.0.8...v1.0.9)

### v1.0.8 (2026-09-27)

**Other changes:**

- chore: remove .pot (● [15ed4e8](https://github.com/corejslib/app-telegram/commit/15ed4e8); 👬 zdm)

Compare with the previous release: [v1.0.7...v1.0.8](https://github.com/corejslib/app-telegram/compare/v1.0.7...v1.0.8)

### v1.0.7 (2026-09-24)

**Other changes:**

- build: update translations (● [54ab78a](https://github.com/corejslib/app-telegram/commit/54ab78a), [ca41f2d](https://github.com/corejslib/app-telegram/commit/ca41f2d); 👬 zdm)

Compare with the previous release: [v1.0.6...v1.0.7](https://github.com/corejslib/app-telegram/compare/v1.0.6...v1.0.7)

### v1.0.6 (2026-09-21)

**Code refactoring:**

- \[PATCH] refactor: use named msgpack imports in telegram (● [ae837f0](https://github.com/corejslib/app-telegram/commit/ae837f0); 👬 zdm)

Compare with the previous release: [v1.0.5...v1.0.6](https://github.com/corejslib/app-telegram/compare/v1.0.5...v1.0.6)

### v1.0.5 (2026-09-21)

**Other changes:**

- style: fix Russian locale strings (● [76e2f4e](https://github.com/corejslib/app-telegram/commit/76e2f4e); 👬 zdm)

Compare with the previous release: [v1.0.4...v1.0.5](https://github.com/corejslib/app-telegram/compare/v1.0.4...v1.0.5)

### v1.0.4 (2026-09-15)

**Bug fixes:**

- \[PATCH] fix: use getStream for Telegram file downloads (● [f148a2d](https://github.com/corejslib/app-telegram/commit/f148a2d); 👬 zdm)

Compare with the previous release: [v1.0.3...v1.0.4](https://github.com/corejslib/app-telegram/compare/v1.0.3...v1.0.4)

### v1.0.3 (2026-09-15)

**Bug fixes:**

- \[PATCH] fix: remove bot user link trigger from migration (● [20f7b06](https://github.com/corejslib/app-telegram/commit/20f7b06); 👬 zdm)

Compare with the previous release: [v1.0.2...v1.0.3](https://github.com/corejslib/app-telegram/compare/v1.0.2...v1.0.3)

### v1.0.2 (2026-09-15)

**Bug fixes:**

- \[PATCH] fix: send updated bot user payload in trigger notifications (● [3083f06](https://github.com/corejslib/app-telegram/commit/3083f06); 👬 zdm)

    Bump the Telegram DB patch version and add the SQL migration for the bot-user after-update trigger so notifications publish the modified JSON payload (`v_data`) instead of the stale `data` value.

Compare with the previous release: [v1.0.1...v1.0.2](https://github.com/corejslib/app-telegram/compare/v1.0.1...v1.0.2)

### v1.0.1 (2026-09-15)

**Other changes:**

- build(deps): update app package references (● [c76aa92](https://github.com/corejslib/app-telegram/commit/c76aa92); 👬 zdm)

    Replace @corejslib/core package references with @corejslib/app in the app dependency manifest and Telegram bot imports.

Compare with the previous release: [v1.0.0...v1.0.1](https://github.com/corejslib/app-telegram/compare/v1.0.0...v1.0.1)

### v1.0.0 (2026-09-15)

**Migration notes:**

See the list of the breaking changes below for details.

**Breaking changes:**

- \[MAJOR] feat!: public release (● [b468dea](https://github.com/corejslib/app-telegram/commit/b468dea); 👬 zdm)

**New features:**

- \[MINOR] feat: add Russian and Ukrainian translations (● [6018a85](https://github.com/corejslib/app-telegram/commit/6018a85); 👬 zdm)

    Add locale catalogs and a translation template for Telegram bot messages.

**Bug fixes:**

- \[PATCH] fix: update Telegram bot import path (● [3b3782d](https://github.com/corejslib/app-telegram/commit/3b3782d); 👬 zdm)

**Other changes:**

- docs: update changelog release date (● [1fdacd6](https://github.com/corejslib/app-telegram/commit/1fdacd6); 👬 zdm)

Compare with the previous release: [v0.0.1...v1.0.0](https://github.com/corejslib/app-telegram/compare/v0.0.1...v1.0.0)
