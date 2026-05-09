import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { EnrollmentSessionProvider, useEnrollmentSession } from '../contexts/EnrollmentSessionContext';
import EnrollmentTimerBar from './EnrollmentTimerBar';

interface LayoutProps {
  children: ReactNode;
}

function LayoutInner({ children }: LayoutProps) {
  const { isActive } = useEnrollmentSession();
  return (
    <div className="min-h-screen bg-white">
      <EnrollmentTimerBar />
      {/* Push content down when timer bar is visible so it doesn't overlap header */}
      <div style={{ paddingTop: isActive ? 52 : 0 }}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default function Layout({ children }: LayoutProps) {
  return (
    <EnrollmentSessionProvider>
      <LayoutInner>{children}</LayoutInner>
    </EnrollmentSessionProvider>
  );
}
