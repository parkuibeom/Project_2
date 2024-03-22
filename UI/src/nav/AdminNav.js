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
    name: '운영자',
  },
  {
    component: CNavGroup,
    name: '이력서관리',
    to: '#',
=======
    name: "운영자",
  },
  {
    component: CNavGroup,
    name: "이력서관리",
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
=======
        name: "신규이력서작성",
        to: "/base/TablesResume",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "맞춤채용정보",
    to: "#",
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
<<<<<<< HEAD
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
=======
        name: "맞춤채용정보 수정 및 등록",
        to: "#",
      },
      {
        component: CNavItem,
        name: "맞춤채용정보 삭제",
        to: "#",
      },
      {
        component: CNavItem,
        name: "입사요청 및 현황조회",
        to: "#",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "채용공고조회",
    to: "#",
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
<<<<<<< HEAD
        name: '지원내역조회',
        to: '#',
      }
    ]
  }
]
=======
        name: "지원내역조회",
        to: "#",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "상담 관리",
    to: "#",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "상담 시간표 조회",
        to: "/consultationSchedule",
      },
      {
        component: CNavItem,
        name: "상담 항목 관리",
        to: "/consultationItem",
      },
      {
        component: CNavItem,
        name: "상담원 관리",
        to: "#",
      },
      {
        component: CNavItem,
        name: "학생 상담 종합 이력",
        to: "/history",
      },
    ],
  },
];
>>>>>>> e74673ae8b0c07d08e70c00f19be4c95ad2a4f5d
