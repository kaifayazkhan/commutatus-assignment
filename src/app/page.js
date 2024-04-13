"use client"
import Employee from "@/components/Employee";
import TeamModal from "@/components/TeamModal";
import { org_schema } from "@/data/company";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full p-24 bg-gray-300">
      <TeamModal />
      <div>
        {org_schema.map((org) => (
          <div key={org.id} className="space-y-4">
            <h1 className="text-3xl font-semibold">{org.name}</h1>
            {org.children.map((child) => (
              <div key={child.id} className="ml-8 space-y-2">
                <h2 className="hover:underline text-2xl" onClick={() => console.log("DEPARTMENT", child)}>{child.name}</h2>
                {child.teams.map((team) => (
                  <div key={team.id} className="ml-8 space-y-3" >
                    <h3 className=" text-xl cursor-pointer hover:underline" onClick={() => console.log("TEAM", team)}>{team.team_name}</h3>
                    <div className="flex flex-col md:flex-row gap-2 ml-8">
                      {team.team_members.map((member) => (
                        <div key={member.id} onClick={() => console.log("MEMBER", member)} className="hover:opacity-30 cursor-pointer ">
                          <Employee
                            id={member.id}
                            name={member.name}
                            email={member.email}
                            phone={member.phone}
                            position={member.designation}
                          />
                        </div>
                      ))
                      }
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}
