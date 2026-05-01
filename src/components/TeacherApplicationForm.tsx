import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  cityState: string;
  linkedinProfile: string;
  languagesSpeak: string;
  languagesTeach: string;
  proficiency: string;
  programInterest: string[];
  specificSubject: string;
  ageGroup: string;
  level: string;
  yearsExperience: string;
  professionalEducationExp: boolean;
  educationalBackground: string;
  teachingMode: string[];
  previousExperience: string;
  professionalExperience: string;
  scheduleAvailability: string;
  positionType: string;
  startDate: string;
  willingTravel: string;
  travelDistance: string;
  motivationJoin: string;
  strongFit: string;
  additionalInfo: string;
}

interface FileData {
  resume: File | null;
  certifications: File | null;
  sampleLesson: File | null;
}

export default function TeacherApplicationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    cityState: '',
    linkedinProfile: '',
    languagesSpeak: '',
    languagesTeach: '',
    proficiency: 'Intermediate',
    programInterest: [],
    specificSubject: '',
    ageGroup: '',
    level: 'Intermediate',
    yearsExperience: '',
    professionalEducationExp: false,
    educationalBackground: '',
    teachingMode: [],
    previousExperience: '',
    professionalExperience: '',
    scheduleAvailability: '',
    positionType: '',
    startDate: '',
    willingTravel: 'Occasionally',
    travelDistance: '',
    motivationJoin: '',
    strongFit: '',
    additionalInfo: '',
  });

  const [files, setFiles] = useState<FileData>({
    resume: null,
    certifications: null,
    sampleLesson: null,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const programs = ['ESL', 'TOEFL', 'Medical Interpreter Training', 'Foreign Languages', 'Business Communication'];
  const teachingModes = ['Online', 'In-person', 'Hybrid'];
  const ageGroups = ['Children', 'Teenagers', 'Adults', 'Professionals'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const proficiencies = ['Beginner', 'Intermediate', 'Advanced', 'Native'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string, isArray: boolean) => {
    setFormData(prev => {
      if (isArray) {
        const arr = prev[name as keyof FormData] as string[];
        if (arr.includes(value)) {
          return { ...prev, [name]: arr.filter(item => item !== value) };
        } else {
          return { ...prev, [name]: [...arr, value] };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleRadioChange = (name: string, value: boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'certifications' | 'sampleLesson') => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({ ...prev, [fileType]: file }));
    }
  };

  const uploadFile = async (file: File, _folder: string): Promise<string> => {
    return file.name;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!files.resume) {
        setError('Resume is required');
        setLoading(false);
        return;
      }

      if (!supabase) {
        setSubmitted(true);
        setLoading(false);
        return;
      }

      const resumePath = await uploadFile(files.resume, 'resumes');
      let certificationsPath = '';
      let sampleLessonPath = '';

      if (files.certifications) {
        certificationsPath = await uploadFile(files.certifications, 'certifications');
      }
      if (files.sampleLesson) {
        sampleLessonPath = await uploadFile(files.sampleLesson, 'sample-lessons');
      }

      const { error: submitError } = await supabase
        .from('teacher_applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          city_state: formData.cityState,
          linkedin_profile: formData.linkedinProfile,
          resume_url: resumePath,
          languages_speak: formData.languagesSpeak,
          languages_teach: formData.languagesTeach,
          proficiency: formData.proficiency,
          program_interest: formData.programInterest.join(', '),
          specific_subject: formData.specificSubject,
          age_group: formData.ageGroup,
          level: formData.level,
          years_experience: parseInt(formData.yearsExperience),
          professional_education_exp: formData.professionalEducationExp,
          educational_background: formData.educationalBackground,
          teaching_mode: formData.teachingMode.join(', '),
          previous_experience: formData.previousExperience,
          professional_experience: formData.professionalExperience,
          schedule_availability: formData.scheduleAvailability,
          position_type: formData.positionType,
          start_date: formData.startDate,
          willing_travel: formData.willingTravel,
          travel_distance: formData.travelDistance,
          motivation_join: formData.motivationJoin,
          strong_fit: formData.strongFit,
          additional_info: formData.additionalInfo,
          certifications_url: certificationsPath,
          sample_lesson_url: sampleLessonPath,
        });

      if (submitError) throw submitError;

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        cityState: '',
        linkedinProfile: '',
        languagesSpeak: '',
        languagesTeach: '',
        proficiency: 'Intermediate',
        programInterest: [],
        specificSubject: '',
        ageGroup: '',
        level: 'Intermediate',
        yearsExperience: '',
        professionalEducationExp: false,
        educationalBackground: '',
        teachingMode: [],
        previousExperience: '',
        professionalExperience: '',
        scheduleAvailability: '',
        positionType: '',
        startDate: '',
        willingTravel: 'Occasionally',
        travelDistance: '',
        motivationJoin: '',
        strongFit: '',
        additionalInfo: '',
      });
      setFiles({ resume: null, certifications: null, sampleLesson: null });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      {submitted && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="text-emerald-900 font-bold">Application Submitted</h3>
            <p className="text-emerald-700 text-sm">Thank you for applying! We will review your application and contact you soon.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="text-red-900 font-bold">Error</h3>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {/* Section 1: Personal Information */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Full Name" required>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
            <FormField label="Email Address" required>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
            <FormField label="Phone Number">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </FormField>
            <FormField label="City & State">
              <input
                type="text"
                name="cityState"
                value={formData.cityState}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </FormField>
            <FormField label="LinkedIn Profile (optional)" className="md:col-span-2">
              <input
                type="url"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </FormField>
            <FormField label="Upload Resume" required className="md:col-span-2">
              <FileInput
                onChange={(e) => handleFileChange(e, 'resume')}
                accept=".pdf,.doc,.docx"
                fileName={files.resume?.name}
                required
              />
            </FormField>
          </div>
        </section>

        {/* Section 2: Languages */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Languages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Languages You Speak" required>
              <input
                type="text"
                name="languagesSpeak"
                value={formData.languagesSpeak}
                onChange={handleInputChange}
                placeholder="e.g., English, Spanish, French"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
            <FormField label="Languages You Can Teach" required>
              <input
                type="text"
                name="languagesTeach"
                value={formData.languagesTeach}
                onChange={handleInputChange}
                placeholder="e.g., Spanish, French"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
            <FormField label="Proficiency Level" required>
              <select
                name="proficiency"
                value={formData.proficiency}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                {proficiencies.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </FormField>
          </div>
        </section>

        {/* Section 3: Program Interest */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Interest</h2>
          <FormField label="Which programs interest you?" required>
            <div className="space-y-3">
              {programs.map(program => (
                <label key={program} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.programInterest.includes(program)}
                    onChange={() => handleCheckboxChange('programInterest', program, true)}
                    className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500"
                  />
                  <span className="ml-3 text-gray-700">{program}</span>
                </label>
              ))}
            </div>
          </FormField>
          <FormField label="Specific Subject or Program" required className="mt-6">
            <input
              type="text"
              name="specificSubject"
              value={formData.specificSubject}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
        </section>

        {/* Section 4: Teaching Preferences */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching Preferences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Age Group" required>
              <select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Select age group</option>
                {ageGroups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Level" required>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </FormField>
          </div>
          <FormField label="Teaching Mode" required className="mt-6">
            <div className="space-y-3">
              {teachingModes.map(mode => (
                <label key={mode} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.teachingMode.includes(mode)}
                    onChange={() => handleCheckboxChange('teachingMode', mode, true)}
                    className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500"
                  />
                  <span className="ml-3 text-gray-700">{mode}</span>
                </label>
              ))}
            </div>
          </FormField>
        </section>

        {/* Section 5: Experience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Years of Teaching Experience" required>
              <input
                type="number"
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleInputChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
            <FormField label="Professional Education Experience" required>
              <div className="flex items-center gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="professionalEducationExp"
                    checked={formData.professionalEducationExp === true}
                    onChange={() => handleRadioChange('professionalEducationExp', true)}
                    className="w-4 h-4 text-emerald-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="professionalEducationExp"
                    checked={formData.professionalEducationExp === false}
                    onChange={() => handleRadioChange('professionalEducationExp', false)}
                    className="w-4 h-4 text-emerald-500"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </FormField>
          </div>
          <FormField label="Educational Background" required className="mt-6">
            <textarea
              name="educationalBackground"
              value={formData.educationalBackground}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
          <FormField label="Previous Teaching Experience" required className="mt-6">
            <textarea
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
        </section>

        {/* Section 6: Professional Background */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h2>
          <FormField label="Relevant Professional Experience">
            <textarea
              name="professionalExperience"
              value={formData.professionalExperience}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
          </FormField>
        </section>

        {/* Section 7: Availability */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Availability</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Schedule Availability" required>
              <input
                type="text"
                name="scheduleAvailability"
                value={formData.scheduleAvailability}
                onChange={handleInputChange}
                placeholder="e.g., Weekdays 9am-5pm, Weekends available"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
            <FormField label="Position Type" required>
              <select
                name="positionType"
                value={formData.positionType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Select position type</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Full-time">Full-time</option>
              </select>
            </FormField>
            <FormField label="Start Date" required>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
          </div>
        </section>

        {/* Section 8: Travel */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Willing to Travel" required>
              <select
                name="willingTravel"
                value={formData.willingTravel}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </FormField>
            <FormField label="Travel Distance">
              <input
                type="text"
                name="travelDistance"
                value={formData.travelDistance}
                onChange={handleInputChange}
                placeholder="e.g., Up to 50 miles"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </FormField>
          </div>
        </section>

        {/* Section 9: Motivation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Motivation</h2>
          <FormField label="Why join Fluent Future Academy?" required>
            <textarea
              name="motivationJoin"
              value={formData.motivationJoin}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
          <FormField label="Why are you a strong fit?" required className="mt-6">
            <textarea
              name="strongFit"
              value={formData.strongFit}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
          <FormField label="Additional Information" className="mt-6">
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
          </FormField>
        </section>

        {/* Section 10: Documents */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Certifications (optional)">
              <FileInput
                onChange={(e) => handleFileChange(e, 'certifications')}
                accept=".pdf,.doc,.docx"
                fileName={files.certifications?.name}
              />
            </FormField>
            <FormField label="Sample Lesson (optional)">
              <FileInput
                onChange={(e) => handleFileChange(e, 'sampleLesson')}
                accept=".pdf,.doc,.docx,.mp4,.mov"
                fileName={files.sampleLesson?.name}
              />
            </FormField>
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-emerald-500 text-white font-semibold py-3 rounded-lg hover:bg-emerald-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
          <button
            type="reset"
            className="px-8 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}

function FormField({ label, required = false, children, className = '' }: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-gray-700 font-semibold mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

function FileInput({ onChange, accept, fileName, required = false }: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept: string;
  fileName?: string;
  required?: boolean;
}) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer relative">
      <input
        type="file"
        onChange={onChange}
        accept={accept}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        required={required}
      />
      <Upload size={24} className="mx-auto text-gray-400 mb-2" />
      <p className="text-gray-600 font-semibold">
        {fileName ? `Selected: ${fileName}` : 'Click to upload or drag and drop'}
      </p>
      <p className="text-gray-500 text-sm">PDF, DOC, DOCX accepted</p>
    </div>
  );
}
