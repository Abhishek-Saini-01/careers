import figmaIcon from "@/assets/images/figma-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubcon from "@/assets/images/github-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

import Tag from "@/components/Tag";

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubcon, description: "GitHub is the leading platform for code collaboration." },
];
export type IntegrationsTypes = typeof integrations;



const Integrations = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">Plays well with <span className="text-lime-400">others</span></h2>
                        <p className="text-white/50 mt-4 text-lg">Layers seamlessty connects with your favorite tools workflow and ohlaborate across platforms.</p>
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