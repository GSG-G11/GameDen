BEGIN;

DROP TABLE
  IF EXISTS users,
  games,
  game_user CASCADE;

CREATE TABLE
  users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
  );

CREATE TABLE
  games (
    id SERIAL PRIMARY KEY,
    game_name VARCHAR(255) NOT NULL,
    image text NOT NULL,
    description text NOT NULL,
    game_url text NOT NULL
  );

CREATE TABLE
  game_user (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    FOREIGN key (user_id) REFERENCES users(id),
    FOREIGN key (game_id) REFERENCES games(id)
  );

INSERT INTO
  games (game_name, image, description, game_url)
VALUES
  (
    'Grand Theft Auto 5 PS4 - PlayStation 4',
    'https://m.media-amazon.com/images/I/71kJo3PC3pL._AC_SX522_.jpg',
    'Language: English,Manufacturer: Sony',
    'https://www.rockstargames.com/V/'
  ),
   (
    'Minecraft game',
    'https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg',
    'Cover of Minecraft,Language: English,Manufacturer: Minecraft',
    'https://www.minecraft.net/en-us'
  ),

  (
    'Rocket League',

'https://cdn2.unrealengine.com/egs-social-rocketleague-news-1920x1080-1920x1080-975383433.jpg',
'We’re excited to announce that Rocket League is going free to play and launching on the Epic Games Store on September 23!',

'https://store.epicgames.com/en-US/news/rocket-league-is-free-to-play-on-epic-games-store-starting-september-23'

),

(
  'Spirit of the Island',

'https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__opengraph/img/0A_yzGwxraMhSkdgPWbwChQeSvE=/fit-in/1200x630/filters:strip_icc()/pic3615739.png',
'Spirit of the Island is a colorful coop life-sim RPG set on a tropical Archipelago. Build your farm, grow crops and animals, gather resources',
'https://store.epicgames.com/en-US/p/spirit-of-the-island'


),
 (
    'Battlefield',
    'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
    'The next generation of all-out war is here – play Battlefield 2042 today. Adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal',
    'https://www.ea.com/games/battlefield/battlefield-2042'
  ),
   (
    'Fortnite',
    'https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg',
    'fortnite of the Island is a colorful coop life-sim RPG set on a tropical Archipelago. Build your farm, grow crops and animals, gather resources',
    'https://www.epicgames.com/fortnite/en-US/home'
  );


COMMIT;