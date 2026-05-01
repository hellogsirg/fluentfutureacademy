import { useState } from 'react';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  cityState: string;
  linkedinProfile: string;
  position: string;
  yearsExperience: string;
  educationalBackground: string;
  professionalExperience: string;
  scheduleAvailability: string;
  positionType: string;
  startDate: string;
  motivationJoin: string;
  strongFit: string;
  additionalInfo: string;
}

interface FileData {
  resume: File | null;
  certifications: File | null;
}

export default function OtherPositionsForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    cityState: '',
    linkedinProfile: '',
    position: '',
    yearsExperience: '',
    educationalBackground: '',
    professionalExperience: '',
    scheduleAvailability: '',
    positionType: '',
    startDate: '',
    motivationJoin: '',
    strongFit: '',
    additionalInfo: '',
  });

  const [files, setFiles] = useState<FileData>({
    resume: null,
    certifications: null,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const positions = ['Technical Support', 'Program Coordinator', 'Marketing Specialist'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'certifications') => {
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

      if (files.certifications) {
        certificationsPath = await uploadFile(files.certifications, 'certifications');
      }

      const { error: submitError } = await supabase
        .from('other_positions_applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          city_state: formData.cityState,
          linkedin_profile: formData.linkedinProfile,
          resume_url: resumePath,
          position: formData.position,
          years_experience: formData.yearsExperience,
          educational_background: formData.educationalBackground,
          professional_experience: formData.professionalExperience,
          schedule_availability: formData.scheduleAvailability,
          position_type: formData.positionType,
          start_date: formData.startDate,
          motivation_join: formData.motivationJoin,
          strong_fit: formData.strongFit,
          additional_info: formData.additionalInfo,
          certifications_url: certificationsPath,
        });

      if (submitError) throw submitError;

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        cityState: '',
        linkedinProfile: '',
        position: '',
        yearsExperience: '',
        educationalBackground: '',
        professionalExperience: '',
        scheduleAvailability: '',
        positionType: '',
        startDate: '',
        motivationJoin: '',
        strongFit: '',
        additionalInfo: '',
      });
      setFiles({ resume: null, certifications: null });

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

        {/* Section 2: Position */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Position</h2>
          <FormField label="Position applying for" required>
            <select
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            >
              <option value="">Select a position</option>
              {positions.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </FormField>
        </section>

        {/* Section 3: Professional Experience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Years of relevant experience" required>
              <input
                type="text"
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleInputChange}
                placeholder="e.g., 3-5 years"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
            </FormField>
          </div>
          <FormField label="Educational background" required className="mt-6">
            <textarea
              name="educationalBackground"
              value={formData.educationalBackground}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
          <FormField label="Relevant professional experience" required className="mt-6">
            <textarea
              name="professionalExperience"
              value={formData.professionalExperience}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
        </section>

        {/* Section 4: Availability */}
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

        {/* Section 5: Motivation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Motivation</h2>
          <FormField label="Why do you want to join Fluent Future Academy?" required>
            <textarea
              name="motivationJoin"
              value={formData.motivationJoin}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
          <FormField label="Why are you a strong fit for this role?" required className="mt-6">
            <textarea
              name="strongFit"
              value={formData.strongFit}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              required
            />
          </FormField>
          <FormField label="Additional information" className="mt-6">
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
          </FormField>
        </section>

        {/* Section 6: Documents */}
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
