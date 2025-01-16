import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowUp,
  Calendar,
  ChevronRight,
  Clock,
  Maximize,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";
import DepartmentIcon from "@/assets/clipboard.png";
import CalendarIcon from "@/assets/calendar.png";
import ClockIcon from "@/assets/clock.png";
import ProfileIcon from "@/assets/profle.png";
import ZoominIcon from "@/assets/zoomin.png";


const meetingData = {
  date: {
    label: "날짜 선택",
    value: "2024년 12월 30일 부터\n2024년 12월 31일 까지",
    icon: CalendarIcon
  },
  time: {
    label: "시간 선택",
    value: "오전 9시 부터\n오후 10시 까지",
    icon: ClockIcon
  },
  people: {
    label: "인원 선택",
    value: "7 명",
    icon: ProfileIcon
  },
  settings: {
    label: "추가 설정",
    value: "과목선택",
    icon: ZoominIcon
  },
};

const statsData = {
  department: {
    title: "팀플 학과",
    subtitle: "가장 많은 팀플이 생성된 학과",
    value: "카이스트 기술경영학부",
    count: "16번",
    iconSrc: DepartmentIcon,
  },
  course: {
    title: "팀플 과목",
    subtitle: "가장 많은 팀플이 생성된 과목",
    value: "CS320: 프로그래밍 언어",
    count: "10번",
    iconSrc: DepartmentIcon,
  },
};

export default function MainLogout() {
  return (
    <div className="min-h-screen bg-[#dee3ff]">
      {/* Header */}
      <header className="h-[84px] flex items-center justify-between px-12">
        <h1 className="text-[32px] font-bold text-[#101e6b]">When2meet</h1>
        <div className="flex items-center gap-4">
          <span className="text-[#101e6b] text-[15px] font-medium">
            로그인/회원가입
          </span>
          <Settings className="w-6 h-6" />
          <Users className="w-6 h-6" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#879aff] to-[#bb6eff] py-16 px-12 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[64px] font-bold text-white mb-4">
            우리 언제 만날까?
          </h2>
          <p className="text-2xl font-bold text-white mb-16">
            팀플 시간을 정하는 가장 빠른 방법.
            <br />
            링크 공유를 통해 빠르게 팀플 시간을 정해보세요.
          </p>

          <h3 className="text-2xl font-black text-[#f0f2ff] mb-4">시간 정하기</h3>

          <Input
            className="w-[696px] h-[51px] bg-[#f0f2ff] rounded-[25px] mb-6 px-7"
            placeholder="익명_3721 님의 팀플"
          />

        <div className="flex  gap-6 w-[1300px]">
        {/* 날짜 선택 */}
        <Card className="bg-[#f0f2ff] shadow-md  fit-content rounded-[15px]">
            <CardContent className="flex items-center gap-7 p-6 px-7">
            <Image
                src={CalendarIcon}
                alt="날짜 아이콘"
                className="w-20 h-20"
            />
            <div>
                <p className="text-[#4f4f4f] text-[14px] font-medium">날짜 선택</p>
                <p className="text-[#101e6b] text-[18px] font-bold whitespace-pre-line">
                2024년 12월 30일 부터
                <br />
                2024년 12월 31일 까지
                </p>
            </div>
            </CardContent>
        </Card>

        {/* 시간 선택 */}
        <Card className="bg-[#f0f2ff] shadow-md fit-content rounded-[15px]">
            <CardContent className="flex items-center gap-7 p-6 px-7">
            <Image
                src={ClockIcon}
                alt="시간 아이콘"
                className="w-20 h-20"
            />
            <div>
                <p className="text-[#4f4f4f] text-[14px] font-medium">시간 선택</p>
                <p className="text-[#101e6b] text-[18px] font-bold whitespace-pre-line">
                오전 9시 부터
                <br />
                오후 10시 까지
                </p>
            </div>
            </CardContent>
        </Card>

        {/* 인원 선택 */}
        <Card className="bg-[#f0f2ff] shadow-md fit-content rounded-[15px]">
            <CardContent className="flex items-center gap-7 p-6 px-7">
            <Image
                src={ProfileIcon}
                alt="인원 아이콘"
                className="w-20 h-20"
            />
            <div>
                <p className="text-[#4f4f4f] text-[14px] font-medium">인원 선택</p>
                <p className="text-[#101e6b] text-[18px] font-bold whitespace-pre-line">7 명</p>
            </div>
            </CardContent>
        </Card>

        {/* 추가 설정 */}
        <Card className="bg-[#f0f2ff] shadow-md fit-content rounded-[15px]">
            <CardContent className="flex items-center gap-7 p-6 px-7">
            <Image
                src={ZoominIcon}
                alt="설정 아이콘"
                className="w-20 h-20"
            />
            <div>
                <p className="text-[#4f4f4f] text-[14px] font-medium">추가 설정</p>
                <p className="text-[#101e6b] text-[18px] font-bold whitespace-pre-line">과목선택</p>
            </div>
            </CardContent>
        </Card>
        </div>  
        <Button className="bg-gradient-to-r shadow-lg from-[#4f6aff] to-[#8600ff] rounded-[15px] h-full my-7 px-[100px] relative overflow-hidden animate-floating hover:animate-none hover:shadow-xl transition-all duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-[#4f6aff] via-[#6b60ff] to-[#8600ff] rounded-[15px] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500"></span>
            <ChevronRight className="relative z-10 w-[71px] h-[71px] text-white" />
        </Button>



        </div>
      </section>

      {/* Stats Section */}
      <section className="px-12 py-16">
        <div className="grid grid-cols-3 gap-6">
          {Object.entries(statsData).map(([key, data]) => (
            <Card key={key} className="bg-[#f0f2ff] p-5">
              <CardHeader>
                <CardTitle className="text-lg text-[#5f5f5f]">
                  {data.title}
                </CardTitle>
                <p className="text-2xl font-bold">
                  <span className="text-black">
                    {data.subtitle.split(" ")[0]}{" "}
                  </span>
                  <span className="text-[#101e6b]">
                    {data.subtitle.split(" ")[1]}
                  </span>
                </p>
              </CardHeader>
              <CardContent className="flex items-center gap-6">
                <Image
                  src={DepartmentIcon}
                  alt={`${key} icon`}
                  className="w-24 h-24"
                  width={96}
                  height={96}
                />
                <div>
                  <p className="text-[#101e6b] text-2xl font-bold">
                    {data.value}
                  </p>
                  <p className="text-black text-3xl font-bold">{data.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-[#f0f2ff] p-8 flex flex-col items-center gap-8">
            <ArrowUp className="w-24 h-24" />
            <div className="text-center">
              <p className="text-[#5f5f5f] text-xl font-bold">
                더 다양한 기능을 위해
              </p>
              <p className="text-black text-[25px] font-bold">
                지금 로그인하세요
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
