export type PoemTheme = 'fire' | 'longing' | 'stillness' | 'wonder';

export interface PoemBlock {
  type: 'paragraph' | 'caption';
  text: string;
  image?: string;
  alt?: string;
}

export interface Poem {
  slug: string;
  title: string;
  tagline: string;
  theme: PoemTheme;
  image: string;
  /** Optional full-bleed background used for the homepage writing sections. Falls back to `image`. */
  cover?: string;
  date: string;
  form: string;
  excerpt: string;
  content: PoemBlock[];
}

export const poems: Poem[] = [
  {
    slug: 'a-day-well-spent',
    title: 'A Day Well Spent',
    tagline: 'A spring ride to two churches above the Limfjord',
    theme: 'stillness',
    image: '/images/church.jpg',
    cover: '/images/norholm-churchyard.jpg',
    date: '9 April 2026',
    form: 'Travelogue',
    excerpt: 'It had been a short one, but it was a day well spent.',
    content: [
      { type: 'caption', text: 'Nørholm Kirke, across the churchyard.', image: '/images/norholm-churchyard.jpg', alt: 'The white church seen across the churchyard, a bench and gravestones in the spring grass.' },
      { type: 'paragraph', text: 'The sun was finally out. After a long, harsh winter, the first day that felt even a little warmer was reason enough, so my friend and I decided to go for a ride. We’d planned it around two places: Troldkirken and Nørholm Kirke.' },
      { type: 'paragraph', text: 'We set off from Aalborg and rode out through Skalborg, the city slowly thinning into open road. It was one of those in-between spring days, warm where the sun touched you and chilly the moment the wind found you. The wind stayed with us the whole way, but we didn’t really mind it.' },
      { type: 'paragraph', text: 'Troldkirken sits up on a hill. The first thing that hit me, both on my skin and somewhere deeper, was the cool breeze, and then the view. The whole Limfjord opened up below us, with Sønderholm spread out beneath the hill. It’s an exposed, windy spot, but a deeply peaceful one. Standing next to the old dolmen I felt small. The stone is enormous, older than anything I can really picture, and there’s a story that a troll across the fjord, sick of the church bells in Sønderholm, hurled it here trying to smash the tower. Standing under it, the legend didn’t feel silly at all.' },
      { type: 'paragraph', text: 'From there we rolled back down and carried on through Sønderholm, where we passed the very church the troll was supposed to have been so angry at. The road was calm and quiet, even through the village, and I was having a genuinely good time.' },
      { type: 'paragraph', text: 'Just before Nørholm the land opened into a huge stretch of farmland, green and rolling under a bright blue sky. It looked so much like the old Windows XP wallpaper that the two of us got a little giddy, and that silly hit of nostalgia carried us, grinning, the rest of the way there.' },
      { type: 'caption', text: 'Two old trees, and the church waiting in the gap between them. I liked that you had to look past something to find it.', image: '/images/norholm-trees.jpg', alt: 'The church small in the distance, framed by the bare branches of two trees arching over the churchyard.' },
      { type: 'paragraph', text: 'Then we reached Nørholm, a small village, smaller-feeling even than Sønderholm. We left the bikes in a little parking space behind the church and walked up. The place looked like something out of a film, the white walls almost shining, and maybe it was just the sun after so long a winter, but it stopped me where I stood. I took some pictures. It sat right by the road, people cycling past and a bus going by, and yet it felt completely calm and still.' },
      { type: 'caption', text: 'The dry stone wall and the first daffodils, spring arriving the way it does up here, quietly and a few weeks late.', image: '/images/norholm-wall.jpg', alt: 'The church behind hedges and a dry stone wall in the foreground, bare trees against a clear blue sky.' },
      { type: 'paragraph', text: 'We sat for a while and ate some fruit my friend had packed, then got back on the bikes. On the ride home I felt quietly satisfied that we’d taken the trip that day. It had been a short one, but it was a day well spent.' },
      { type: 'caption', text: 'For about a second the sun broke through the bare branches. I pointed up and let the church fall away into the background. Sometimes the tree is the story.' },
    ],
  },
  {
    slug: 'nyhavn',
    title: 'Nyhavn',
    tagline: 'Colour, water, and the boats between',
    theme: 'fire',
    image: '/images/nyhavn.jpg',
    cover: '/images/nyhavn-canal.jpg',
    date: 'April 2026',
    form: 'Vignette',
    excerpt: 'Colour first. Always colour first.',
    content: [
      { type: 'paragraph', text: 'Colour first. Always colour first.' },
      { type: 'paragraph', text: 'A row of old houses stands side by side along the water, yellow and red and orange, a soft blue like the sky above them. They have stood here a long time. The canal holds them twice: once as paint and stone, once as a shaky reflection that breaks apart and comes back with every ripple.' },
      { type: 'caption', text: 'The canal holding it all twice, the houses and the masts spilling down into the water.', image: '/images/nyhavn-canal.jpg', alt: 'The Nyhavn canal lined with colourful houses and old wooden sailing boats, their masts mirrored in the still water under a clear blue sky.' },
      { type: 'paragraph', text: 'The water is dark and shining at the same time. Tall masts rise out of it, wooden boats tied close together, ropes crossing the light, hulls of green and white and black sitting in their own reflections. The April air is thin and clear and blue. The light is low and warm, and it makes everything glow: the painted walls, the metal, the small rings that spread when a gull lands.' },
      { type: 'paragraph', text: 'Then the sound reaches you. Glasses clinking on the café terraces. The low rumble of a hundred voices. Bike bells, a bit of music, the soft knock of ropes against masts in the wind. Umbrellas open along the water; people pour out of the doorways into the sun, pulled out by the first real warmth of the year, sleeves rolled up, faces turned to the light.' },
      { type: 'paragraph', text: 'This is the moment the place was built for. The cold is over. The water moves, the colour is everywhere, the boats are full, the terraces are loud. And Nyhavn, bright and busy and alive, raises a glass to spring.' },
    ],
  },
];
