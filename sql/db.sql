CREATE TABLE IF NOT EXISTS TBL_PROJECTS (
    ID INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    NAME TEXT NOT NULL CHECK (NAME <> ''),
    PRIORITY INTEGER NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    DELIVERYDATE DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS TBL_TASKS (
    ID INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    NAME TEXT NOT NULL CHECK (NAME <> ''),
    DONE BOOLEAN,
    PROJECT_ID INTEGER REFERENCES TBL_PROJECTS (ID)
);