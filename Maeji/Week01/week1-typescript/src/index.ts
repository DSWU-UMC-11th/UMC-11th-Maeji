// const courseName = "TypeScript";
// console.log("이번 주 학습 주제: " + courseName);

// const currentLevel: number = 1;
// console.log("현재 레벨: " + currentLevel);

// const memberNames = ["광수"];
// console.log(memberNames[5].toUpperCase());

// function introduceStudent(studentName: string, currentLevel: number ){
//     return studentName + " 님은 현재 " + currentLevel + "레벨이에요.";
// }
// introduceStudent("광수", 1);

// let studentName = "광수";
// let currentLevel = 1;
// let isCompleted = false;
// console.log(studentName, currentLevel, isCompleted);

// const firstMember = { name : "광수"};
// const secondMember = { name : "광수"};
// const sameMember = firstMember;
// console.log(firstMember === secondMember);
// console.log(firstMember === sameMember);

// const studyMember = {name : "광수"};
// studyMember.name = "지수";
// console.log(studyMember.name);
// //studyMember = {name : "현우"};

//미니 실습
// //1. 이름, 현재 주차, 완료 여부를 값만 넣어 변수 만들기
// let myName = "광수"; //string
// let currentWeek = 1; // number
// let isCompleted = false; // boolean
// //3.
// let monthSkill = ["HTML", "CSS", "TypeScript"];
// //4,
// //monthSkill.push(12); //문자열만 담는 배열에 숫자를 넣으려해서 오류
// //5.
// const obj1 = {name: "광수"};
// const obj2 = {name : "광수"};
// console.log("객체 비교 결과:", obj1 ===obj2); //false, 서로 다른 객체이기 떄문


// type MemberRole = "leader" | "member";
// function Message(role: MemberRole) {
//   if (role === "leader") {
//     return "스터디를 이끌어요.";
//   }
  
//   return "스터디에 참여해요.";
// }

// console.log(Message("leader")); //스터디를 이끌어요.
// console.log(Message("member")); //스터디에 참여해요.

// console.log(Message("guest"));


// type WeeklyGoal = {
//   title: string;
//   targetCount: number;
// };

// const weeklyGoal: WeeklyGoal = {
//   title: "TypeScript 예제 연습",
//   targetCount: 3,
// };

// function printGoal(goal: WeeklyGoal): string {
//   return goal.title;
// }



// type StudyMember = {
//   name: string;
//   githubId?: string;
// };

// const members: StudyMember[] = [
//   { name: "광수", githubId: "gwangsoo" },
//   { name: "지수" }, 
// ];
// //1
// const foundMember = members.find((member) => member.name ==="현우");
// console.log(foundMember);
// //2
// const selectMember: StudyMember | null = null;
// console.log(selectMember);
// //3
// if(foundMember){
//     console.log(foundMember.name);
// } else{
//     console.log("회원을 찾지 못함");
// }
// //4
// const studyTime =0;
// console.log(studyTime || 100); //100
// console.log(studyTime ?? 100); //0
// //5
// const yeji = members.find((member) => member.name ==="예지");
// const displayGithubId = yeji?.githubId ?? "등록되지 않음";
// console.log(displayGithubId);

// function formatStudyWeek(week: unknown){
//     if(typeof week === "number"){
//         return "현재" + week +"주차예요.";
//     }
//     if(typeof week === "string"){
//         return "입력한 주차: " + week;
//     }
//     return "주차를 확인할 수 없어요.";
// }

// function createBox<T>(value:T){
//     return {value};
// }
// const stringBox = createBox("광수");
// const numberBox = createBox(10);
// const memberBox = createBox({name: "현우"})


//필수 미션


type MemberRole = "leader" | "member";

interface StudyMember {
  id: number;
  name: string;
  role: MemberRole;
  githubId?: string;
}

const members: StudyMember[] = [
  {id: 1, name: "광수", role: "leader", githubId: "gwangsoo"},
  { id: 2, name: "지수", role: "member"},
];


function createRoleMessage(role: MemberRole): string {
  if (role === "leader") {
    return "스터디를 이끌어요.";
  }

  return "스터디에 참여해요.";
}

function createMemberMessage(memberId: number): string {
  const foundMember = members.find((member) => member.id === memberId);

  if (!foundMember) {
    return "ID가 " + memberId + "인 회원을 찾지 못했어요.";
  }

  const displayGithubId = foundMember.githubId ?? "등록되지 않음";
  const roleMessage = createRoleMessage(foundMember.role);

  return ( foundMember.name + " 님의 ID는 " + foundMember.id + "입니다. " + roleMessage + " GitHub 아이디: " + displayGithubId );
}

console.log(createMemberMessage(1));
console.log(createMemberMessage(2));
console.log(createMemberMessage(999));

// 선택 미션
