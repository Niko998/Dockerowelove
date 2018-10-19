<?php

class Querybuilder
{

    protected $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function selectAll($table)
    {
        $statement = $this->pdo->prepare("select * from {$table}");

        $statement->execute();
        
        $x= $statement->fetchAll(PDO::FETCH_OBJ);
        return $x;
    }


}