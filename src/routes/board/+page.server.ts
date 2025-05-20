import path from 'path';
import fs from 'fs';
import type { PageServerLoad } from './$types';
import matter from 'gray-matter';

export async function load() {
    const boardMembers = await loadBoardMembers();
    const policies = await loadPolicies();
    const meetingMinutes = await loadMeetingMinutes();
    const meetingAgendas = await loadMeetingAgendas();

    return { boardMembers: boardMembers, policies: policies, meetingMinutes: meetingMinutes, meetingAgendas: meetingAgendas };
}

async function loadBoardMembers() {
    const boardDir = path.resolve('content/board');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(boardDir)) {
        console.error('No Board directory found');
        return [];
    }
    const files = fs.readdirSync(boardDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return [];
    }
    return files
        .map((filename) => {
            const filePath = path.join(boardDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                name: data.name,
                role: data.role,
                order: data.order,
            };
        })
        // order by order ascending
        .sort((a, b) => a.order - b.order);
}

async function loadPolicies() {
    const policiesDir = path.resolve('content/policies');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(policiesDir)) {
        console.error('No Policies directory found');
        return [];
    }
    const files = fs.readdirSync(policiesDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return [];
    }
    return files
        .map((filename) => {
            const filePath = path.join(policiesDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                name: data.name,
                pdf: data.pdf,
            };
        })
        // order by name alphabetically
        .sort((a, b) => a.name.localeCompare(b.name));
}

async function loadMeetingMinutes(){
    const meetingMinutesDir = path.resolve('content/meeting-minutes');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(meetingMinutesDir)) {
        console.error('No Meeting Minutes directory found');
        return [];
    }
    const files = fs.readdirSync(meetingMinutesDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return [];
    }
    return files
        .map((filename) => {
            const filePath = path.join(meetingMinutesDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                date: data.date,
                fileLink: data.fileLink,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

}

async function loadMeetingAgendas(){
    const meetingAgendasDir = path.resolve('content/meeting-agendas');
    // if the directory doesn't exist, return an empty array
    if (!fs.existsSync(meetingAgendasDir)) {
        console.error('No Meeting Agendas directory found');
        return [];
    }
    const files = fs.readdirSync(meetingAgendasDir);

    // if files is empty, return an empty array
    if (!files.length) {
        return [];
    }
    return files
        .map((filename) => {
            const filePath = path.join(meetingAgendasDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                date: data.date,
                fileLink: data.fileLink,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

}
