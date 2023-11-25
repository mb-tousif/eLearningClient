import { Outlet } from 'react-router-dom';
import LeftNavbar from './LeftNavbar';

export default function Courses() {
  return (
    <div className="flex">
      <LeftNavbar className="grow" />
      <Outlet />
    </div>
  );
}
