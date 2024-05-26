'use client'

import { useEffect } from "react"
import { toast } from "sonner"

export default function Popup() {

    function repeatFunction(name: string) {
        toast.success(`${name} just signed up.`, {
            position: "bottom-center",
            duration: 3000
        })
    }

    function getRandomValue() {
        const names = [
            "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack",
            "Kate", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Ryan", "Sara", "Tom",
            "Uma", "Victor", "Wendy", "Xavier", "Yara", "Zachary", "Abigail", "Benjamin", "Chloe",
            "Daniel", "Emily", "Fiona", "George", "Hannah", "Isaac", "Jessica", "Kevin", "Lily",
            "Michael", "Nora", "Oscar", "Penelope", "Quentin", "Rachel", "Samuel", "Tiffany", "Vincent",
            "Willow", "Xander", "Yvonne", "Zoe"
        ]; 
        const randomIndex = Math.floor(Math.random() * names.length); 
        return names[randomIndex]; 
    }

    function getRandomInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    }

    function startRandomIntervalFunction() {
        const randomValue = getRandomValue();
        setInterval(() => repeatFunction(randomValue), getRandomInterval(3, 6));
    }

    useEffect(() => {
        startRandomIntervalFunction();
    }, [])

    return <></>
}