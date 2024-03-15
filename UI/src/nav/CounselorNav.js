<<<<<<< HEAD
import React from 'react'
import CIcon from '@coreui/icons-react'
=======
import React from "react";
import CIcon from "@coreui/icons-react";
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
<<<<<<< HEAD
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
=======
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d

export const _nav = [
  {
    component: CNavTitle,
<<<<<<< HEAD
    name: '상담',
  },
  {
    component: CNavGroup,
    name: '이력서관리',
    to: '#',
=======
    name: "상담원",
  },
  {
    component: CNavGroup,
    name: "상담 관리",
    to: "#",
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
<<<<<<< HEAD
        name: '신규이력서작성',
        to: '/base/TablesResume',
      }
    ]
  }, {
    component: CNavGroup,
    name: '맞춤채용정보',
    to: '#',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '맞춤채용정보 수정 및 등록',
        to: '#',
      },
      {
        component: CNavItem,
        name: '맞춤채용정보 삭제',
        to: '#',
      },
      {
        component: CNavItem,
        name: '입사요청 및 현황조회',
        to: '#',
      }
    ]
  }, {
    component: CNavGroup,
    name: '채용공고조회',
    to: '#',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '지원내역조회',
        to: '#',
      }
    ]
  }
]
=======
        name: "상담 시간표 조회",
        to: "#",
      },
      {
        component: CNavItem,
        name: "상담 시간표 등록",
        to: "/schedule",
      },
      {
        component: CNavItem,
        name: "상담 신청 처리",
        to: "#",
      },
      {
        component: CNavItem,
        name: "상담 결과 등록",
        to: "#",
      },
    ],
  },
];
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
