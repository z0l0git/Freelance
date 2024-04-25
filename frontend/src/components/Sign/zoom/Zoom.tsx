"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "";
import { pointsInner, pointsOuter } from "./Utils";
import { Group } from "three";
import { Login } from "../Login";
import { SignUp } from "../SignUp";
import { useState } from "react";

export const Zoom = () => {
  const [stage, setStage] = useState(0);
  const [col, setColor] = useState("#053ef3");

  useEffect(() => {
    if (stage == 1) {
      setColor("#05f33a");
    }
    if (stage == 0) {
      setColor("#053ef3");
    }
  }, [stage]);

  const PointCircle = () => {
    const ref = useRef<Group | null>(null);

    useFrame(({ clock }) => {
      if (ref.current?.rotation) {
        ref.current.rotation.z = clock.getElapsedTime() * 0.05;

        // ref.current.rotation.x = clock.getElapsedTime() * 1;
      }
    });

    return (
      <group ref={ref}>
        {pointsInner.map((point) => (
          <Point
            key={point.idx}
            position={point.position}
            color={point.color}
          />
        ))}
        {pointsOuter.map((point) => (
          <Point
            key={point.idx}
            position={point.position}
            color={point.color}
          />
        ))}
      </group>
    );
  };

  const Point = ({
    position,
    color,
  }: {
    position: number[];
    color: string;
  }) => {
    return (
      // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
      // and the referenced method in the documentation
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
          emissive={col}
          emissiveIntensity={0.5}
          roughness={0.5}
          color={color}
        />
      </Sphere>
    );
  };

  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div
        // style={rotateStyle}
        className={`bbb rounded-[10px] sm:w-550px] w-fit h-fit pt-[20px]  pb-[30px]   border border-gray-400 flex flex-col items-center gap-[25px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="">
          {stage === 0 && <Login />}
          {stage === 1 && <SignUp setStage={setStage} />}
        </div>
        <div className="text-white text-start text-[10px]">
          {stage === 0 && (
            <div className="flex gap-[10px] text-start md:text-[16px] xs:text-[12px] sm:text-[12px] text-[9px]">
              <div className="">Don't you have an account?</div>
              <div
                className="cursor-pointer text-blue-500 "
                onClick={() => setStage(1)}
              >
                SignUp
              </div>
            </div>
          )}
          {stage === 1 && (
            <div className="flex gap-[10px] text-start md:text-[16px] xs:text-[12px] sm:text-[12px] text-[9px  ">
              <div className="">Do you have an account?</div>
              <div
                className="cursor-pointer text-blue-500"
                onClick={() => setStage(0)}
              >
                SignIn
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
