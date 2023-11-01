import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/dbClient";
import { redirect } from "next/navigation";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { ChannelType } from "@prisma/client";
import { MediaRoom } from "@/components/media-room";
interface ChannelIdPageProps {
    params: {
        serverId: string;
        channelId: string;
    }
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
    const profile = await currentProfile();
    if (!profile) return redirectToSignIn();

    const channel = await db.channel.findUnique({
        where: {
            id: params.channelId,
        }
    });

    const member = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            profileId: profile.id,
        }
    });

    if (!channel || !member) return redirect(`/`);

    return (
        <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
            <ChatHeader serverId={channel.serverId} name={channel.name} type={"channel"} />
            {channel.type === ChannelType.TEXT && (
                <>
                    <ChatMessages
                        member={member}
                        name={channel.name}
                        type="channel"
                        apiUrl="/api/messages"
                        socketUrl="/api/socket/messages"
                        socketQuery={{ channelId: channel.id, serverId: channel.serverId }}
                        paramValue={channel.id}
                        paramKey="channelId"
                        chatId={channel.id}
                    />
                    <ChatInput apiUrl={"/api/socket/messages"} query={{ channelId: channel.id, serverId: channel.serverId }} name={channel.name} type={"channel"} /></>
            )}
            {channel.type === ChannelType.AUDIO && (
                <MediaRoom chatId={channel.id} video={false} audio={true} />
            )}
            {channel.type === ChannelType.VIDEO && (
                <MediaRoom chatId={channel.id} video={true} audio={false} />
            )}
        </div>
    )
}

export default ChannelIdPage