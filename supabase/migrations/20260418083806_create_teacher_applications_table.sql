/*
  # Create Teacher Applications Table

  1. New Tables
    - `teacher_applications`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone_number` (text)
      - `city_state` (text)
      - `linkedin_profile` (text)
      - `resume_url` (text, required)
      - `languages_speak` (text, required)
      - `languages_teach` (text, required)
      - `proficiency` (text, required) - Beginner/Intermediate/Advanced/Native
      - `program_interest` (text, required) - comma-separated
      - `specific_subject` (text, required)
      - `age_group` (text, required) - Children/Teenagers/Adults/Professionals
      - `level` (text, required) - Beginner/Intermediate/Advanced
      - `years_experience` (integer, required)
      - `professional_education_exp` (boolean, required)
      - `educational_background` (text, required)
      - `teaching_mode` (text, required) - Online/In-person/Hybrid
      - `previous_experience` (text, required)
      - `professional_experience` (text)
      - `schedule_availability` (text, required)
      - `position_type` (text, required) - Part-time/Contract/Full-time
      - `start_date` (date, required)
      - `willing_travel` (text, required) - Yes/No/Occasionally
      - `travel_distance` (text)
      - `motivation_join` (text, required)
      - `strong_fit` (text, required)
      - `additional_info` (text)
      - `certifications_url` (text)
      - `sample_lesson_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `teacher_applications` table
    - Add policy for public submissions
    - Add policy for admin/authenticated users to view all applications
*/

CREATE TABLE IF NOT EXISTS teacher_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text,
  city_state text,
  linkedin_profile text,
  resume_url text NOT NULL,
  languages_speak text NOT NULL,
  languages_teach text NOT NULL,
  proficiency text NOT NULL CHECK (proficiency IN ('Beginner', 'Intermediate', 'Advanced', 'Native')),
  program_interest text NOT NULL,
  specific_subject text NOT NULL,
  age_group text NOT NULL,
  level text NOT NULL CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  years_experience integer NOT NULL,
  professional_education_exp boolean NOT NULL,
  educational_background text NOT NULL,
  teaching_mode text NOT NULL CHECK (teaching_mode IN ('Online', 'In-person', 'Hybrid')),
  previous_experience text NOT NULL,
  professional_experience text,
  schedule_availability text NOT NULL,
  position_type text NOT NULL CHECK (position_type IN ('Part-time', 'Contract', 'Full-time')),
  start_date date NOT NULL,
  willing_travel text NOT NULL CHECK (willing_travel IN ('Yes', 'No', 'Occasionally')),
  travel_distance text,
  motivation_join text NOT NULL,
  strong_fit text NOT NULL,
  additional_info text,
  certifications_url text,
  sample_lesson_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE teacher_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit teacher application"
  ON teacher_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own applications"
  ON teacher_applications
  FOR SELECT
  TO authenticated
  USING (email = LOWER(current_setting('jwt.claims.email', true)) OR auth.uid()::text = current_setting('jwt.claims.sub', true));
