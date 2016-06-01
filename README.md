[![Built with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](http://github.com/syl20bnr/spacemacs)

# Soccer Match Timeline

A vertical timeline creator to display events of a soccer match with HTML/CSS/JavaScript. 

It's a subproject of my [club homepage](https://github.com/the-guitarman/club_homepage) project. The intension is to send all match events to all connected clients via websockets from the playing field directly and to display them as a timeline. Nice benefit: This way other imprecise messenger communication becomes useless.

## Dependencies

- jQuery
- Twitter Bootstrap (CSS)
- Underscore.js
- Moment.js with locales

## Example

![Timeline](readme/image_01.jpg)

## Usage

To use the timeline creator remove the example data tag (`<script src="lib/example-data.js"></script>`) at first.

## Match Character

If your match may be undecided after 90 minutes and then it would need some extra time and a penalty shoot-out so set the `data-match-character` attribute of the `match-timeline` element to `deciding-game` within the `index.html` file.

## Languages

At the moment there are two languages:

- `en`: English (default)
- `de`: German

To select a language set the `data-language` attribute of the `match-timeline` element within the `index.html` file.

Feel free to add more translations.

## License

This project has a dual license.

This package is licensed under the **LGPL 3.0**. Do whatever you want with it, but please give improvements and bugfixes back so everyone can benefit.

For commercial usage please contact me at first.

*Note:* Everything may break at every time.