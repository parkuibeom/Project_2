import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { logo } from 'src/assets/brand/logo'
<<<<<<< HEAD
import StudentHeaderNav from './head/StudentHeader'
import AdminHeaderNav from './head/AdminHeader'
import ACAVSRHeaderNav from './head/ACAVSRHeader'
import SCSBJTHeaderNav from './head/SCSBJTHeader'
import BzentyHeaderNav from './head/BzentyHeader'
import CounselorHeaderNav from './head/CounselorHeader'
=======
import HeaderNavItem from './head/HeaderNavItem'
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate = useNavigate()
<<<<<<< HEAD

=======
  let menuItems
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
  const handleLogout = () => {
    localStorage.clear()

    fetch('/cbb/user/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    navigate('/login')
  };

  const userGroup = localStorage.getItem('userGroupCd');

  let HeaderNavComponent;
  if (userGroup === '10') {
<<<<<<< HEAD
    HeaderNavComponent = <AdminHeaderNav />;
  } else if (userGroup === '20') {
    HeaderNavComponent = <StudentHeaderNav />;
  } else if (userGroup === '30') {
    HeaderNavComponent = <ACAVSRHeaderNav />;
  } else if (userGroup === '40') {
    HeaderNavComponent = <SCSBJTHeaderNav />;
  } else if (userGroup === '50') {
    HeaderNavComponent = <BzentyHeaderNav />;
  } else if (userGroup === '60') {
    HeaderNavComponent = <CounselorHeaderNav />;
=======
    menuItems = [
      { name: '담당자', link: '/' },
      { name: '담당자', link: '/' },
      { name: '담당자', link: '/' },
      { name: '담당자', link: '/' }
    ];
    HeaderNavComponent = <HeaderNavItem navItem={menuItems} />
  } else if (userGroup === '20') {
    menuItems = [
      { name: '현장 실습', link: '/' },
      { name: '취업 활동', link: '/' },
      { name: '상담 신청', link: '/' },
    ];
    HeaderNavComponent = <HeaderNavItem navItem={menuItems} />
  } else if (userGroup === '30') {
    menuItems = [
      { name: '현장 실습 관리', link: '/' }
    ];
    HeaderNavComponent = <HeaderNavItem navItem={menuItems} />
  } else if (userGroup === '40') {
    menuItems = [
      { name: '지도 교수 배정', link: '/professorSelect' }
    ];
    HeaderNavComponent = <HeaderNavItem navItem={menuItems} />
  } else if (userGroup === '50') {
    menuItems = [
      { name: '현장 실습 관리', link: '/' },
      { name: '채용 정보 관리', link: '/' },
      { name: '기업 정보 관리', link: '/' }
    ];
    HeaderNavComponent = <HeaderNavItem navItem={menuItems} />
  } else if (userGroup === '60') {
    menuItems = [
      { name: '상담', link: '/' },
      { name: '상담', link: '/' },
      { name: '상담', link: '/' },
      { name: '상담', link: '/' }
    ];
    HeaderNavComponent = <HeaderNavItem navItem={menuItems} />
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
  }

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        {HeaderNavComponent}
        <CHeaderNav>
          <CNavItem>
            <CNavLink onClick={handleLogout}>
              Logout
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
