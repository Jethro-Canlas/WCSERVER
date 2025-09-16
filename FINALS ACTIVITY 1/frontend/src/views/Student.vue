<template>
  <div>
    <h2>Student Form</h2>
    <form @submit.prevent="submitStudent">
      <fieldset>
        <input v-model="studentId" placeholder="Student ID" />
        <input v-model="firstName" placeholder="First Name" />
        <input v-model="lastName" placeholder="Last Name" />
        <input v-model="section" placeholder="Section" />
        <button type="submit">Save</button>
      </fieldset>
    </form>

    <h3>Saved Students:</h3>
    <ul>
      <li v-for="s in students" :key="s._id">
        {{ s.studentId }} - {{ s.firstName }} {{ s.lastName }} ({{ s.section }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const studentId = ref("");
const firstName = ref("");
const lastName = ref("");
const section = ref("");
const students = ref([]);

const fetchStudents = async () => {
  const res = await axios.get("http://localhost:3000/api/student");
  students.value = res.data;
};

const submitStudent = async () => {
  await axios.post("http://localhost:3000/api/student", {
    studentId: studentId.value,
    firstName: firstName.value,
    lastName: lastName.value,
    section: section.value,
  });
  await fetchStudents();
  studentId.value = firstName.value = lastName.value = section.value = "";
};

onMounted(fetchStudents);
</script>