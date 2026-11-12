import sql from "#core/sql";

export default sql`

CREATE EXTENSION IF NOT EXISTS softvisio;

CREATE TABLE telegram_client (
    id int53 PRIMARY KEY,
    static boolean NOT NULL,
    bot boolean NOT NULL,
    session text NOT NULL
);

`;
