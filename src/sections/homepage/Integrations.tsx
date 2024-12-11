import DoctorIcon from "@/assets/images/doctor.jpg";
import EngineerIcon from "@/assets/images/engineer.jpg";
import LawyerIcon from "@/assets/images/lawyer.jpg";
import PioletIcon from "@/assets/images/poilet.jpg";
import PoliticanIcon from "@/assets/images/politions.jpg";
import TeacherIcon from "@/assets/images/teacher.jpg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

import Tag from "@/components/Tag";

const integrations = [
    { name: "Engineer", icon: EngineerIcon, description: "Designs and builds systems, structures, or technologies." },
    { name: "Doctor", icon: DoctorIcon, description: "Diagnoses and treats medical conditions, ensuring health." },
    { name: "Lawyer", icon: LawyerIcon, description: "Provides legal advice and represents clients in court." },
    { name: "Teacher", icon: TeacherIcon, description: "Educates and shapes the minds of future generations." },
    { name: "Pilot", icon: PioletIcon, description: "Operates aircraft to transport passengers or cargo." },
    { name: "Politician", icon: PoliticanIcon, description: "Represents people, creates policies, and governs." },
];
export type IntegrationsTypes = typeof integrations;



const Integrations = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Careers</Tag>
                        <h2 className="text-6xl font-medium mt-6">Career <span className="bg-gradient text-transparent bg-clip-text">Navigator</span></h2>
                        <p className="text-white/50 mt-4 text-lg">Helping you discover, explore, and achieve your ideal career path</p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 overflow-hidden mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn
                                integrations={integrations}
                            />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                classname="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Integrations