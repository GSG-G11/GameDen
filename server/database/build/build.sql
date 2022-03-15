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
  );

  INSERT INTO users (user_name, email, password)  VALUES (
    'a7md', 'aliMOh_123@gmail.com', '$2a$10$CuXxC90kEaj9BtrEuIHcgeTp1ykfh.HviYFy7swjRccylr7cGEIVu'
  );

COMMIT;