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
  );


-- INSERT INTO game_user (user_id, game_id) VALUES (1,1);
-- select DISTINCT  g.id  as game_id , g.game_name, g.image, g.description, g.game_url  FROM games g join game_user gu on g.id = gu.game_id join users u on u.id = gu.user_id where u.id=1;

COMMIT;