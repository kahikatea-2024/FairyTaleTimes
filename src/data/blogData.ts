const blogData = [
  {
    image: '/blog-images/1.png',
    title: 'How to Build a Privacy Fence That Actually Works (Because Villagers Are the Worst)',
    subtitle: 'January 2nd 2023',
    author: 'Shrek',
    text: 'You know whats worse than a dragon breathing fire on your front lawn? Villagers. The kind that come poking around your swamp, trying to storm your castle, or ask for autographs. Build your own "get lost" fence with logs, swamp muck, and a healthy splash of sarcasm. Bonus tip: Alligators make great guards.',
  },
  {
    image: '/blog-images/2.png',
    title: 'Ogres Dont Do Detox: Why I will Never Apologize for My Diet of Eyeball Soup',
    subtitle: 'Febuary 1st 2023',
    author: 'Shrek',
    text: 'Green juice? Nah. Give me something with real texture. If it does not crunch or squish when you bite into it, whats the point? Here is why ogres stick to eyeball soup, roasted rats, and some lovely swamp snacks—and how you can, too (if you have got the stomach).',
  },
  {
    image: '/blog-images/3.png',
    title: 'The Swamp Survival Kit: 5 Things You Need to Stay Off the Grid',
    subtitle: 'June 14th 2023',
    author: 'Shrek',
    text: 'People think surviving in the swamp is hard, but all you really need is the right kit. Pro tips: a good club (for knocking intruders out), a sturdy outhouse (do not ask), and a bag of bugs (midday snack). With these, you will stay safe, sound, and undisturbed.',
  },
  {
    image: '/blog-images/4.png',
    title: 'Embracing the Funk: A Beginners Guide to Natural Ogre Hygiene',
    subtitle: 'March 2nd 2023',
    author: 'Shrek',
    text: 'Who needs soap? Mud, slime, and the occasional pond scum bath work just fine. This guide will help you embrace the "natural" look while keeping those pesky villagers away. (The worse you smell, the more effective it is!)',
  },
  {
    image: '/blog-images/5.png',
    title: 'Breaking Stereotypes: How to Be a Princess and an Ogre (Without Losing Your Crown)',
    subtitle: 'August 29th 2023',
    author: 'Fiona',
    text: 'Being a princess does not mean you have to wear glass slippers 24/7. Sometimes, you gotta stomp in with muddy boots, roar, and show them whos boss. Here is how I balance royal elegance with ogre toughness, and why you do not have to pick one over the other',
  },
  {
    image: '/blog-images/20.png',
    title: 'From Castle to Swamp: Decorating Tips for Your Dual Life',
    subtitle: 'October 11th 2023',
    author: 'Fiona',
    text: 'Do you live in a castle by day and a swamp by night? No problem. Bring out the best of both worlds with rustic swamp touches and royal flair. Think mossy curtains, fancy thrones made of logs, and frogs as table centerpieces.',
  },
  {
    image: '/blog-images/6.png',
    title: 'Battle-Ready: My Workout Routine for Kicking Butt in a Ball Gown',
    subtitle: 'May 17th 2023',
    author: 'Fiona',
    text: 'Ladies, who says you can not fight a battle while looking fabulous? Here is my daily workout routine thatll have you ready to defeat an army, rescue yourself from a tower, or outrun an angry ogre—all without ruining your dress.',
  },
  {
    image: '/blog-images/7.png',
    title: 'Royal Etiquette or Ogre Etiquette? A Handy Guide for Confused Fairy-Tale Creatures',
    subtitle: 'February 22nd 2024',
    author: 'Fiona',
    text: 'When to bow? When to belch? As someone who straddles the line between royal and ogre, I have got you covered. This guide will help you navigate awkward royal dinners and muddy swamp feasts with grace—or at least without embarrassing yourself too much.',
  },
  {
    image: '/blog-images/8.png',
    title: 'Love in the Time of Dragons: How to Keep Your Romance Alive (Even When She Could Eat You)',
    subtitle: 'July 5th 2023',
    author: 'Donkey',
    text: 'So you have fallen for a dragon. Happens to the best of us. It is all about communication... and maybe a fire extinguisher. Here are my top tips for maintaining a romantic connection when your partners idea of "spicy" might accidentally set you on fire.',
  },
  {
    image: '/blog-images/9.png',
    title: 'Unfiltered: What Its Really Like Raising Dragon-Donkey Kids (Hint: It is Wild)',
    subtitle: 'January 9th 2024',
    author: 'Donkey',
    text: 'Let me tell you, raising a bunch of half-donkey, half-dragon kids is no joke. Between flying lessons and dental care for sharp teeth, my life is never boring. Here is the scoop on parenthood when your kids can fly, breathe fire, and talk back',
  },
  {
    image: '/blog-images/10.png',
    title: 'My Top 5 Tips for Dating Outside Your Species (Because Love Is Love, Right?)',
    subtitle: 'December 1st 2023',
    author: 'Donkey',
    text: 'Do not let a little thing like “biology” stop you from finding love. Whether you are dating a dragon, a fairy, or even an ogre, these tips will help keep your cross-species relationship healthy and full of spark (literally).',
  },
  {
    image: '/blog-images/11.png',
    title: 'Fireproof or Not? Handling Arguments with a Fiery Partner',
    subtitle: 'April 25th 2023',
    author: 'Donkey',
    text: 'When you are dating someone who can breathe fire, arguments take on a whole new level. Here is how I manage heated discussions (literally), keep my cool, and occasionally put out the flames without getting burned.',
  },

  {
    image: '/blog-images/12.png',
    title: 'How to Balance Being a Fire-Breathing Mom While Keeping Your Castle in Order',
    subtitle: 'September 7th 2023',
    author: 'Dragon',
    text: 'Parenting is hard enough without wings, scales, and fire breath. Here is how I keep my dragon brood in check while maintaining a perfectly organized lair (no burning it down in the process).',
  },
  {
    image: '/blog-images/13.png',
    title: 'Scales and Tails: Skincare Tips for Mythical Creatures',
    subtitle: 'November 19th 2023',
    author: 'Dragon',
    text: 'Even dragons need a good skincare routine! My top tips for keeping your scales shiny, your wings strong, and your tail looking its best—whether you are flying into battle or just lounging in your lair.',
  },
  {
    image: '/blog-images/14.png',
    title: 'Raising Hybrids: The Challenges of Parenting Half-Dragon, Half-Donkey Kids',
    subtitle: 'August 4th 2023',
    author: 'Dragon',
    text: 'Raising hybrid kids is no walk in the park (or the swamp). They are strong, fast, and a little unpredictable. Here is my survival guide for moms who find themselves with offspring that breathe fire and bray all in one breath.',
  },
  {
    image: '/blog-images/15.png',
    title: 'How to Find Romance in a World That is Scared of You',
    subtitle: 'February 11th 2023',
    author: 'Dragon',
    text: 'Being a dragon doesnt mean you can not find love, but lets face it, most creatures are a little... terrified. Here is my advice for finding someone brave enough to love you, fire breath and all.',
  },
  {
    image: '/blog-images/16.png',
    title: 'Why You Are Not Ugly, Just Poor: How to Actually Improve Your Look',
    subtitle: 'October 3rd 2023',
    author: 'Fairy Godmother, Editor In Cheif',
    text: 'Darling, no one is truly ugly, just underfunded. With the right resources (and a little magic), anyone can become a beauty. But lets be real—if you are not willing to invest, do not expect miracles. Here is how I turn frogs into princes... for a price.',
  },
  {
    image: '/blog-images/17.png',
    title: 'The Power of a Proper Spell: When and Where to Use Magic (Without Looking Desperate)',
    subtitle: 'May 2nd 2024',
    author: 'Fairy Godmother, Editor In Cheif',
    text: 'Nothing is worse than using a spell when you could have just used common sense. Here is how to wield magic with grace, subtlety, and just the right amount of pizzazz. No, darling, turning your ex into a toad is never the right answer.',
  },

  {
    image: '/blog-images/18.png',
    title: 'Royal Disasters: My Top 5 Kingdoms That Need a Complete Makeover',
    subtitle: 'July 18th 2023',
    author: 'Fairy Godmother, Editor In Cheif',
    text: 'Some kingdoms are beyond help, but that will not stop me from trying. Here are the top five royal disasters that desperately need my touch—and why they are probably still stuck in the Dark Ages without me.',
  },
  {
    image: '/blog-images/19.png',
    title: 'Wand Etiquette: What to Do When Someone Does not Know How to Ask for Help Properly',
    subtitle: 'January 26th 2023',
    author: 'Fairy Godmother, Editor In Cheif',
    text: 'There is an art to requesting magical assistance, and trust me, most people do not get it. Here is a crash course in wand etiquette, because if you come to me begging and unprepared, do not expect much more than a pumpkin for your trouble.',
  },
  ];

export default blogData;
