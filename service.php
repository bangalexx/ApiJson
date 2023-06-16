<?php

include "koneksi.php";

$sql = "SELECT * FROM data ORDER BY id";

$data = mysqli_query($db, $sql);

$results = array();
while ($row = mysqli_fetch_array($data)) {
    $results[] = array(
        'nama' => $row['nama'],
        'umur' => $row['umur'],
        'pekerjaan' => $row['pekerjaan']
    );
}

$json = json_encode($results);
echo $json;

?>
