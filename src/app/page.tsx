import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 md:py-8">
        <CourseHeader />
        <CoursePlan />
      </div>
    </div>
  );
}
