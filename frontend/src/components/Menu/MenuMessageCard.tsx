"use client";
import Image from "next/image";
export const MenuMessageCard = (props: any) => {
  const { userName, messageSubject, createdDate, profilePicture } = props;
  return (
    <div className="w-full h-16 flex hover:bg-slate-300 gap-4">
      <div className="w-16 h-16 rounded-full bg-gray-600">
        <Image alt="user picture" src={profilePicture} width={60} height={60} />
      </div>
      <div className="w-4/12 h-16 object-contain">
        <p className="bold mx-0">{userName}</p>
        <p className="text-gray-500 w-full h-5 overflow-hidden mx-0">
          {messageSubject}
        </p>
        <div className="text-xs">{createdDate}</div>
      </div>
    </div>
  );
};
export const MenuNotificationCard = (props: any) => {
  const { userName, createdDate, profilePicture, className } = props;
  return (
    <div className={className}>
      <div className="w-full h-16 flex hover:bg-slate-300 gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-600">
          <Image
            alt="user picture"
            src={profilePicture}
            width={60}
            height={60}
          />
        </div>
        <div className="w-">
          <h1 className="bold">{userName}</h1>
          <p className="text-gray-500">Шинэ мэдэгдэл</p>
          <div className="text-xs">{createdDate}</div>
        </div>
      </div>
    </div>
  );
};
