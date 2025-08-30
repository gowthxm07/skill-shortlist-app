-- Users table (for students and recruiters)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'recruiter')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills table (for student skills)
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  skill_name VARCHAR(100) NOT NULL,
  level VARCHAR(50) CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  verified BOOLEAN DEFAULT FALSE,
  badge VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
