/*
  # Create Other Positions Applications Table

  1. New Tables
    - `other_positions_applications`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone_number` (text)
      - `city_state` (text)
      - `linkedin_profile` (text, optional)
      - `resume_url` (text, required)
      - `position` (text, required) - Technical Support / Program Coordinator / Marketing Specialist
      - `years_experience` (text, required)
      - `educational_background` (text, required)
      - `professional_experience` (text, required)
      - `schedule_availability` (text, required)
      - `position_type` (text, required) - Part-time / Contract / Full-time
      - `start_date` (date, required)
      - `motivation_join` (text, required)
      - `strong_fit` (text, required)
      - `additional_info` (text, optional)
      - `certifications_url` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `other_positions_applications` table
    - Add policy for public submissions (INSERT)
    - Add policy for authenticated users to view own applications (SELECT)
*/

CREATE TABLE IF NOT EXISTS other_positions_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text DEFAULT '',
  city_state text DEFAULT '',
  linkedin_profile text DEFAULT '',
  resume_url text NOT NULL,
  position text NOT NULL CHECK (position IN ('Technical Support', 'Program Coordinator', 'Marketing Specialist')),
  years_experience text NOT NULL,
  educational_background text NOT NULL,
  professional_experience text NOT NULL,
  schedule_availability text NOT NULL,
  position_type text NOT NULL CHECK (position_type IN ('Part-time', 'Contract', 'Full-time')),
  start_date date NOT NULL,
  motivation_join text NOT NULL,
  strong_fit text NOT NULL,
  additional_info text DEFAULT '',
  certifications_url text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE other_positions_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit other positions application"
  ON other_positions_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own other positions applications"
  ON other_positions_applications
  FOR SELECT
  TO authenticated
  USING (email = LOWER(current_setting('jwt.claims.email', true)) OR auth.uid()::text = current_setting('jwt.claims.sub', true));
