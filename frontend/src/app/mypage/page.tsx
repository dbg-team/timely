import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Edit as EditIcon,
  Filter as FilterIcon,
  Search,
  Settings,
  Star,
  User,
  Users,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileIcon from "@/assets/profle.png";

const sortOptions = ["이름순", "생성 날짜순", "완료 여부"];

export default function HomeLogin() {

  let teamProjectStats = [
    { label: "지금까지 생성한 팀플 횟수", value: "1회" },
    { label: "지금까지 참여한 팀플 횟수", value: "2회" },
    { label: "지금까지 만난 사람수", value: "3회" },
    { label: "주당 평균 팀플 횟수", value: "4명" },
  ];

  let projectCards = [
    {
      date: "2024년 3월 20일",
      title: "하기 싫은 NLP 팀플",
      status: "완료",
      subject: "자연언어 처리를 위한 머신러닝",
      members: "4/4 명",
    },
  ]

  return (
    <div className="min-h-screen bg-[#dee3ff]">
      {/* Navigation Bar */}
      <header className="h-[60px] bg-gradient-to-r from-[#BB6EFF] to-[#879AFF] px-12 flex items-center justify-between">
        
        <Link href="/main">
          <h1 className="text-[#101e6b] text-2xl font-bold">TTY</h1>
        </Link>
        
        <div className="flex items-center gap-1">
          <span className="text-[#101e6b] font-bold text-sm">재현</span>
          
          <div className="flex items-center gap-4">
            <span className="text-black text-sm">님, 안녕하세요</span>
            <Button variant="ghost" size="icon">
              <Settings className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-60 py-8 space-y-8">
        {/* Profile Section */}
        <div className="flex items-center gap-6">
            <Image
                src={ProfileIcon}
                alt="날짜 아이콘"
                className="w-[55px] h-[55px]"
            />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[#8600ff] text-[26px] font-bold">재현</h2>
              <Button variant="ghost" size="icon">
                <EditIcon className="w-6 h-6" />
              </Button>
            </div>
            <p className="text-[#686868] text-sm">j2hyeon02@kaist.ac.kr</p>
          </div>
        </div>

        <Separator className="bg-[#3a3a3a] h-[0.5px]" />

        <div className="grid grid-cols-2 gap-8">
          {/* Stats Card */}
          <Card className="bg-[#f0f2ff] shadow-md rounded-[15px]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6" />
                <CardTitle className="text-[20px]">
                  <span className="text-[#101e6b]">재현 </span>
                  <span className="text-black">님의 팀플 통계</span>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div className="space-y-2">
                  {teamProjectStats.map((stat) => (
                    <p key={stat.label} className="text-[16px] font-medium">
                      {stat.label}
                    </p>
                  ))}
                </div>
                <div className="space-y-2 text-right">
                  {teamProjectStats.map((stat) => (
                    <p key={stat.value} className="text-[16px] font-semibold">
                      {stat.value}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grade Card */}
          <Card className="bg-[#f0f2ff] shadow-md rounded-[15px]">
            <CardContent className="flex flex-col items-center justify-between p-9">
              <div className="w-[88px] h-[88px] bg-[#b8c3ff] rounded-full flex items-center justify-center">
                <span className="text-[45px] font-bold">A</span>
              </div>
              <div className="text-center py-5">
                <h3 className="text-[#101e6b] text-[22px] font-bold">
                  성실한 팀플러입니다!
                </h3>
                <p className="text-[#484848] text-[18px] font-semibold">
                  평균보다 2.2회 많은 팀플을 하셨습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator></Separator>
        
        <div className="space-y-5">
          {/* Filter Section */}
          <Card className="bg-[#f0f2ff] shadow-md rounded-[15px]">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <FilterIcon className="w-6 h-6" />
                <span className="text-[#101e6b] text-lg font-bold">
                  빠른 정렬
                </span>
              </div>
              <div className="flex gap-4">
                {sortOptions.map((option) => (
                  <Button key={option} variant="outline" className="bg-[#f0f2ff]">
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Search Section */}
          <div className="flex gap-4">
            <Card className="bg-[#f0f2ff] flex-grow shadow-md rounded-[15px]">
              <CardContent className="flex items-center gap-2 p-4">
                <Search className="w-6 h-6" />
                <Input
                  placeholder="이름 검색"
                  className="border-none bg-transparent"
                />
              </CardContent>
            </Card>
            <Button className="shadow-lg rounded-[15px] bg-gradient-to-b from-[#8600ff] to-[#4F6AFF] text-[16px] px-8 text-[#ffffff]">
              검색하기
            </Button>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-2 gap-8">
            {projectCards.map((project, index) => (
              <Card key={index} className="bg-[#f0f2ff] shadow-md rounded-[15px]">
                <CardContent className="p-7 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#5f5f5f] text-base text-[13px]">{project.date}</p>
                      <h3 className="text-[20px] font-bold">{project.title}</h3>
                    </div>
                    <Badge className="bg-[#a8c7ff] text-black px-5 py-0.5 text-[13px] rounded-[5px]">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#898989] text-[16px]">{project.subject}</p>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" />
                      <span className="text-[#101e6b] text-[16px] font-semibold">
                        {project.members}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
